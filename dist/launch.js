"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
dotenv.config();
const app_1 = __importDefault(require("./app"));
function start() {
    app_1.default.listen(process.env.PORT);
}
start();
//# sourceMappingURL=launch.js.map