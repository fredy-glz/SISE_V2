"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const divisionController_1 = require("../controllers/divisionController");
class DivisionRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', divisionController_1.divi.getAll);
        this.router.get('/:NUA', divisionController_1.divi.getOne);
        this.router.post('/', divisionController_1.divi.saveOne);
        this.router.delete('/:NUA', divisionController_1.divi.deleteOne);
        this.router.put('/:NUA', divisionController_1.divi.updateOne);
    }
}
const diviRoutes = new DivisionRoutes();
exports.default = diviRoutes.router;
