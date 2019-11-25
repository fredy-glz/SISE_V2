"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class SolicitudRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', (req, res) => res.send('Hola games'));
    }
}
const solicitudRoutes = new SolicitudRoutes();
exports.default = solicitudRoutes.router;
