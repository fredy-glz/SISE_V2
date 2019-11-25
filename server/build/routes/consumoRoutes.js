"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const consumoController_1 = require("../controllers/consumoController");
class ConsumoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', consumoController_1.consumo.getAll);
        this.router.get('/:NUA', consumoController_1.consumo.getOne);
        this.router.post('/', consumoController_1.consumo.saveOne);
        this.router.delete('/:NUA', consumoController_1.consumo.deleteOne);
        this.router.put('/:NUA', consumoController_1.consumo.updateOne);
    }
}
const consumoRoutes = new ConsumoRoutes();
exports.default = consumoRoutes.router;
