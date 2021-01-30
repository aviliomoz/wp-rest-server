import { Router } from 'express';

//MIDDLEWARES
import { verifyToken } from '../middlewares/auth';

//MODELS
import Product from '../models/product';

//LOGIC
const productsRouter = Router();

productsRouter.get('/', verifyToken, (req, res) => {
  Product.find({ active: true })
    .populate('user', 'name email')
    .populate('category', 'description')
    .exec((err, products) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      if (!products) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      Product.countDocuments({ active: true }, (err, count) => {
        res.json({
          ok: true,
          count,
          products,
        });
      });
    });
});

productsRouter.get('/:id', verifyToken, (req, res) => {
  let id = req.params.id;

  Product.findById(id)
    .populate('user', 'name email')
    .populate('category', 'description')
    .exec((err, productDB) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      if (!productDB) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      res.json({
        ok: true,
        product: productDB,
      });
    });
});

productsRouter.get('/search/:keyword', (req, res) => {
  let keyword = req.params.keyword;
  let regex = RegExp(keyword, 'i');

  Product.find({ name: regex })
    .populate('user', 'name email')
    .populate('category', 'description')
    .exec((err, products) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      if (!products) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      Product.countDocuments({ name: regex }, (err, count) => {
        res.json({
          ok: true,
          count,
          products,
        });
      });
    });
});

productsRouter.post('/', verifyToken, (req, res) => {
  let body = req.body;

  let product = new Product({
    name: body.name,
    description: body.description,
    price: body.price,
    img: body.img,
    active: body.active,
    category: body.category, // OJO
    user: req.user._id,
  });

  product.save((err, productDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!productDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    res.json({
      ok: true,
      product: productDB,
    });
  });
});

productsRouter.put('/:id', verifyToken, (req, res) => {
  let id = req.params.id;
  let body = req.body;

  Product.findById(id, {}, {}, (err, productDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!productDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    productDB.name = body.name;
    productDB.description = body.description;
    productDB.price = body.price;
    productDB.img = body.img;
    productDB.active = body.active;
    productDB.category = body.category;

    productDB.save((err, updatedProduct) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      res.status(201).json({
        ok: true,
        message: 'Producto actualizado',
        product: updatedProduct,
      });
    });
  });
});

productsRouter.delete('/:id', verifyToken, (req, res) => {
  let id = req.params.id;

  Product.findById(id, (err, productDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!productDB) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    productDB.active = false;

    productDB.save((err, deletedProduct) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      res.json({
        ok: true,
        message: 'Producto desactivado',
        product: deletedProduct,
      });
    });
  });
});

export default productsRouter;
