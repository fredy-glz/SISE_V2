"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const sacaController_1 = require("../controllers/sacaController");
class SacaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', sacaController_1.saca.getAll);
        this.router.get('/:NUA', sacaController_1.saca.getOne);
        this.router.post('/', sacaController_1.saca.saveOne);
        this.router.delete('/:NUA', sacaController_1.saca.deleteOne);
        this.router.put('/:NUA', sacaController_1.saca.updateOne);
    }
}
const sacaRoutes = new SacaRoutes();
exports.default = sacaRoutes.router;
