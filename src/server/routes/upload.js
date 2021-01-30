import { Router } from 'express';
import fileUpload from 'express-fileupload';

import fs from 'fs';
import path from 'path';

//MODELS
import User from '../models/user';
import Product from '../models/product';

//VALID OPTIONS
const validExtensions = ['png', 'jpg'];
const validDestinations = ['users', 'products'];

const uploadRouter = Router();

uploadRouter.use(fileUpload({ useTempFiles: true }));

uploadRouter.put('/:destination/:id', (req, res) => {
  let destination = req.params.destination;
  let id = req.params.id;

  if (!req.files) {
    return res.status(400).json({
      ok: false,
      err: {
        message: 'No se ha seleccionado ningun archivo',
      },
    });
  }

  let file = req.files.file;
  let fileNameSplitted = file.name.split('.');
  let fileExtension = fileNameSplitted[fileNameSplitted.length - 1];

  if (validExtensions.indexOf(fileExtension) < 0) {
    return res.status(400).json({
      ok: false,
      err: {
        message:
          'Solo se permiten archivos con extensiones ' +
          validExtensions.join(' o ') +
          '.',
        ext: fileExtension,
      },
    });
  }

  if (validDestinations.indexOf(destination) < 0) {
    return res.status(400).json({
      ok: false,
      err: {
        message:
          'Solo se permiten los destinos ' +
          validDestinations.join(' o ') +
          '.',
      },
    });
  }

  let uniqueFileName = `${id}-${new Date().getMilliseconds()}.${fileExtension}`;

  file.mv(`./uploads/${destination}/${uniqueFileName}`, (err) => {
    if (err) {
      return res.status(500).json({
        ok: false,
        err,
      });
    }

    switch (destination) {
      case 'users':
        userImageUpload(id, res, uniqueFileName);
        break;
      case 'products':
        productImageUpload(id, res, uniqueFileName);
      default:
        break;
    }
  });
});

//FUNCTIONS
const userImageUpload = (id, res, filename) => {
  User.findById(id, (err, userDB) => {
    if (err) {
      deleteOldImg(filename, 'users');
      return res.status(500).json({
        ok: false,
        message: `Usuario con ID ${err.value} no existe`,
        err,
      });
    }

    if (!userDB) {
      deleteOldImg(filename, 'users');
      return res.status(400).json({
        ok: false,
        err: {
          message: 'No se encontro el usuario',
        },
      });
    }

    deleteOldImg(userDB.img, 'users');

    userDB.img = filename;
    userDB.save((err, savedUser) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      res.json({
        ok: true,
        message: 'Archivo subido y usuario actualizado correctamente',
        user: savedUser,
      });
    });
  });
};

const productImageUpload = (id, res, filename) => {
  Product.findById(id, (err, productDB) => {
    if (err) {
      deleteOldImg(filename, 'products');
      return res.status(500).json({
        ok: false,
        message: `Producto con ID ${err.value} no existe`,
        err,
      });
    }

    if (!productDB) {
      deleteOldImg(filename, 'products');
      return res.status(400).json({
        ok: false,
        err: {
          message: 'No se encontro el producto',
        },
      });
    }

    deleteOldImg(productDB.img, 'products');

    productDB.img = filename;
    productDB.save((err, savedProduct) => {
      if (err) {
        return res.status(500).json({
          ok: false,
          err,
        });
      }

      res.json({
        ok: true,
        message: 'Archivo subido y producto actualizado correctamente',
        product: savedProduct,
      });
    });
  });
};

const deleteOldImg = (filename, destination) => {
  let imagePath = path.resolve(
    __dirname,
    `../../uploads/${destination}/${filename}`,
  );

  if (fs.existsSync(imagePath)) {
    fs.unlinkSync(imagePath);
  }
};

export default uploadRouter;
