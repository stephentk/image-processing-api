"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const logger_1 = __importDefault(require("./middleware/logger"));
const routes = express_1.default.Router();
/*
const sharp = require('sharp');
const resizeImage = () => {
    const resize = sharp('./sharp-image-project-sample-background-image-300x200.jpeg')
    .resize(245, 190)
    .toFile(__dirname + './sharp-image-project-sample-background-image-300x200.jpeg');
    const resizes = sharp('./sharp-image-project-sample-image-300x169.jpeg')
    .resize(280,170)
    .toFile(__dirname + './sharp-image-project-sample-image-300x169.jpeg')
  
    console.log(resize)
    console.log(resizes)
  }
  
  resizeImage()

routes.get('/resize',logger,(req,res) =>{
    res.send(resizeImage());
})
*/
routes.get('/country', logger_1.default, (req, res) => {
    res.send('this is country');
});
routes.get('/states', logger_1.default, (req, res) => {
    res.send('these are the states');
});
exports.default = routes;
