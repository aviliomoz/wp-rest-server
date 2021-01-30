import { Router } from 'express';
import bcrypt from 'bcrypt';

//MODELS
import User from '../models/user';

//MIDDLEWARES
import { verifyAdminRole, verifyToken } from '../middlewares/auth';

//LOGIC
const usersRouter = Router();

usersRouter.get('/', verifyToken, (req, res) => {
  let skip = req.query.skip || 0;
  skip = Number(skip);

  let show = req.query.show || 5;
  show = Number(show);

  User.find({})
    .skip(skip)
    .limit(show)
    .exec((err, users) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      User.countDocuments({}, (err, count) => {
        if (err) {
          return res.status(400).json({
            ok: false,
            err,
          });
        }

        res.json({
          ok: true,
          count,
          users,
        });
      });
    });
});

usersRouter.post('/', [verifyToken, verifyAdminRole], (req, res) => {
  let body = req.body;

  let user = new User({
    name: body.name,
    email: body.email,
    password: bcrypt.hashSync(body.password, 10),
    role: body.role,
  });

  user.save({}, (err, userDB) => {
    if (err) {
      res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!userDB) {
      res.status(400).json({
        ok: false,
        message: 'El usuario no fue guardado correctamente',
      });
    }

    res.status(200).json({
      ok: true,
      message: 'Usuario guardado correctamente',
      user: userDB,
    });
  });
});

usersRouter.put('/:id', [verifyToken, verifyAdminRole], (req, res) => {
  let body = req.body;
  let id = req.params.id;

  delete body.password;
  delete body.google;

  User.findByIdAndUpdate(
    id,
    body,
    { new: true, runValidators: true },
    (err, userDB) => {
      if (err) {
        return res.status(400).json({
          ok: false,
          err,
        });
      }

      res.json({
        ok: true,
        user: userDB,
      });
    },
  );
});

usersRouter.delete('/:id', [verifyToken, verifyAdminRole], (req, res) => {
  let id = req.params.id;

  User.findByIdAndRemove(id, {}, (err, deletedUser) => {
    if (err) {
      return res.status(400).json({
        ok: false,
        err,
      });
    }

    if (!deletedUser) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'El usuario no fue encontrado',
        },
      });
    }

    res.json({
      ok: true,
      user: deletedUser,
    });
  });
});

export default usersRouter;
