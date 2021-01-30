import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  let token = req.get('token');

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err,
      });
    }

    req.user = decoded.user;

    next();
  });
};

export const verifyAdminRole = (req, res, next) => {
  if (req.user.role === 'ADMIN_ROLE') {
    next();
  } else {
    res.status(401).json({
      ok: false,
      err: {
        message: 'EL usuario actual no tiene permisos para realizar la acción',
      },
    });
  }
};

export const verifyTokenImg = (req, res, next) => {
  let token = req.query.token;

  jwt.verify(token, process.env.SEED, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        ok: false,
        err,
      });
    }

    req.user = decoded.user;

    next();
  });
};
