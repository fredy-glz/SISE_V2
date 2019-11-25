"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dietaController_1 = require("../controllers/dietaController");
class DietaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', dietaController_1.dieta.getAll);
        this.router.get('/:NUA', dietaController_1.dieta.getOne);
        this.router.post('/', dietaController_1.dieta.saveOne);
        this.router.delete('/:NUA', dietaController_1.dieta.deleteOne);
        this.router.put('/:NUA', dietaController_1.dieta.updateOne);
    }
}
const dietaRoutes = new DietaRoutes();
exports.default = dietaRoutes.router;
