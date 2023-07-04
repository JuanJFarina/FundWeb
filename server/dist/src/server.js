"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const routes_1 = __importDefault(require("@/routes"));
const server = (0, express_1.default)();
server.use((0, morgan_1.default)("dev"));
server.use(express_1.default.json());
server.use(routes_1.default);
server.use((err, req, res, next) => {
    res.status(err.statusCode || 500).send({
        error: true,
        message: err.message
    });
});
exports.default = server;
