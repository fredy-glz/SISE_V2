"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const historiaController_1 = require("../controllers/historiaController");
class HistoriaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', historiaController_1.historia.getAll);
        this.router.get('/:NUA', historiaController_1.historia.getOne);
        this.router.post('/', historiaController_1.historia.saveOne);
        this.router.delete('/:NUA', historiaController_1.historia.deleteOne);
        this.router.delete('/:NUA', historiaController_1.historia.updateOne);
    }
}
const historiaRoutes = new historiaRoutes();
exports.default = historiaRoutes.router;
