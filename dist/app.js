"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
const router = require("./routes/router");
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/', router);
exports.default = app;
//# sourceMappingURL=app.js.map