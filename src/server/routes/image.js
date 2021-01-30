import { Router } from 'express';

import fs from 'fs';
import path from 'path';

//MIDDLEWARES
import { verifyTokenImg } from '../middlewares/auth';

//LOGIC
const imageRouter = Router();

imageRouter.get('/:type/:img', verifyTokenImg, (req, res) => {
  let type = req.params.type;
  let img = req.params.img;

  let imagePath = path.resolve(__dirname, `../uploads/${type}/${img}`);

  if (fs.existsSync(imagePath)) {
    res.sendFile(imagePath);
  } else {
    let noImagePath = path.resolve(
      __dirname,
      `../src/server/assets/images/no-image.png`,
    );
    res.sendFile(noImagePath);
  }
});

export default imageRouter;
