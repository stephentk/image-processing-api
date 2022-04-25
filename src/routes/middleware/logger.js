"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger = (req, res, next) => {
    console.log('website was visited');
    next();
};
exports.default = logger;
