import { Router } from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//MODELS
import User from '../models/user';

//LOGIC
const loginRouter = Router();

loginRouter.post('/', (req, res) => {
  let body = req.body;

  User.findOne({ email: body.email }, (err, userDB) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    if (!userDB) {
      return res.status(400).json({
        ok: false,
        err: {
          message: '(Usuario) o contraseña incorrecto',
        },
      });
    }

    if (!bcrypt.compareSync(body.password, userDB.password)) {
      return res.status(400).json({
        ok: false,
        err: {
          message: 'Usuario o (contraseña) incorrecto',
        },
      });
    }

    let token = jwt.sign(
      {
        user: userDB,
      },
      process.env.SEED,
      { expiresIn: '48h' },
    );

    res.json({
      ok: true,
      user: userDB,
      token,
    });
  });
});

export default loginRouter;
