"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const historiaMNController_1 = require("../controllers/historiaMNController");
class HistoriaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', historiaMNController_1.historia.getAll);
        this.router.get('/:NUA', historiaMNController_1.historia.getOne);
        this.router.post('/', historiaMNController_1.historia.saveOne);
        this.router.delete('/:NUA', historiaMNController_1.historia.deleteOne);
        this.router.put('/:NUA', historiaMNController_1.historia.updateOne);
    }
}
const historiaRoutes = new HistoriaRoutes();
exports.default = historiaRoutes.router;
