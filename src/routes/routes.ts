import express from 'express';

import logger  from './middleware/logger';
const routes  = express.Router();
const sharp = require('sharp');
const resizeImage = () => {
    const resize = sharp('./sharp-image-project-sample-background-image-300x200.jpeg')
    .resize(245, 190)
    .toFile(__dirname + './sharp-image-project-sample-background-image-300x200.jpeg');
    const resizes = sharp('./sharp-image-project-sample-image-300x169.jpeg')
    .resize(280,170)
    .toFile(__dirname + './sharp-image-project-sample-image-300x169.jpeg')p
  
    console.log(resize)
    console.log(resizes)
  }
  
  resizeImage()

routes.get('/resize',logger,(req,res) =>{
    res.send(resizeImage());
})
export default  routes