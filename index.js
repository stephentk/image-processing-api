"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require('dotenv').config();
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("./src/routes/routes"));
const body_parser_1 = __importDefault(require("body-parser"));
require('dotenv').config();
const app = (0, express_1.default)();
app.use('/', routes_1.default);
app.use(body_parser_1.default.json());
app.get('/', (req, res) => {
    res.send('Well done!');
});
console.log(process.env.Test_VAR);
app.listen(4000, () => {
    console.log(`The application is listening on port `);
});
