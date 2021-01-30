import { Router } from 'express';

//MODELS
import Category from '../models/category';

//MIDDLEWARES
import { verifyAdminRole, verifyToken } from '../middlewares/auth';

//LOGIC
const categoriesRouter = Router();

categoriesRouter.get('/', verifyToken, (req, res) => {
  Category.find({}).exec((err, categories) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!categories) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    Category.countDocuments((err, count) => {
      res.json({
        ok: true,
        count,
        categories,
      });
    });
  });
});

categoriesRouter.get('/:id', verifyToken, (req, res) => {
  let id = req.params.id;

  Category.findById(id, {}, {}, (err, categoryDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!categoryDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      category: categoryDB,
    });
  });
});

categoriesRouter.post('/', verifyToken, (req, res) => {
  let body = req.body;

  let category = new Category({
    description: body.description,
    user: req.user._id,
  });

  category.save((err, categoryDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!categoryDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      category: categoryDB,
    });
  });
});

categoriesRouter.put('/:id', [verifyToken, verifyAdminRole], (req, res) => {
  let id = req.params.id;
  let body = req.body;

  Category.findById(id, {}, {}, (err, categoryDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!categoryDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    categoryDB.description = body.description;

    categoryDB.save((err, updatedCategory) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      res.status(201).json({
        ok: true,
        message: 'Categoria actualizada',
        category: updatedCategory,
      });
    });
  });
});

categoriesRouter.delete('/:id', [verifyToken, verifyAdminRole], (req, res) => {
  let id = req.params.id;

  Category.findByIdAndDelete(id, (err, categoryDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!categoryDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      message: 'Categoria borrada',
      category: categoryDB,
    });
  });
});

export default categoriesRouter;
