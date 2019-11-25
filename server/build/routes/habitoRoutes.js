"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const habitoController_1 = require("../controllers/habitoController");
class HabitoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', habitoController_1.habito.getAll);
        this.router.get('/:NUA', habitoController_1.habito.getOne);
        this.router.post('/', habitoController_1.habito.saveOne);
        this.router.delete('/:NUA', habitoController_1.habito.deleteOne);
        this.router.put('/:NUA', habitoController_1.habito.updateOne);
    }
}
const habitoRoutes = new HabitoRoutes();
exports.default = habitoRoutes.router;
