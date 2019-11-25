"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const criterioController_1 = require("../controllers/criterioController");
class CriterioRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', criterioController_1.criterio.getAll);
        this.router.get('/:NUA', criterioController_1.criterio.getOne);
        this.router.post('/', criterioController_1.criterio.saveOne);
        this.router.delete('/:NUA', criterioController_1.criterio.deleteOne);
        this.router.put('/:NUA', criterioController_1.criterio.updateOne);
    }
}
const criterioRoutes = new CriterioRoutes();
exports.default = criterioRoutes.router;
