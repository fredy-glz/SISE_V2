"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const ejercicioController_1 = require("../controllers/ejercicioController");
class EjercicioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', ejercicioController_1.ejercicio.getAll);
        this.router.get('/:NUA', ejercicioController_1.ejercicio.getOne);
        this.router.post('/', ejercicioController_1.ejercicio.saveOne);
        this.router.delete('/:NUA', ejercicioController_1.ejercicio.deleteOne);
        this.router.put('/:NUA', ejercicioController_1.ejercicio.updateOne);
    }
}
const ejercicioRoutes = new EjercicioRoutes();
exports.default = ejercicioRoutes.router;
