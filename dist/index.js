"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
//configuration the .env file
dotenv_1.default.config();
//create  Express App
const app = (0, express_1.default)();
const port = process.env.PORT || 8000;
//define firts route of App
app.get('/', (req, res) => {
    //send hello world
    res.send('Welcome to my APIRestful: Express + TS + Nodemon + Jest + Swagger + Mongoose');
});
//define firts route of App
app.get('/hello', (req, res) => {
    //send hello world
    res.send('welcome to Get Route: hello world');
});
//Execute App and Listen requests to PORT
app.listen(port, () => {
    console.log(`Express Server Running at http://localhost:${port}`);
});
//# sourceMappingURL=index.js.map