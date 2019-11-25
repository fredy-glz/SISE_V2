"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const medidasController_1 = require("../controllers/medidasController");
class MedidasRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', medidasController_1.medidas.getAll);
        this.router.get('/:NUA', medidasController_1.medidas.getOne);
        this.router.post('/', medidasController_1.medidas.saveOne);
        this.router.delete('/:NUA', medidasController_1.medidas.deleteOne);
        this.router.put('/:NUA', medidasController_1.medidas.updateOne);
    }
}
const medidasRoutes = new MedidasRoutes();
exports.default = medidasRoutes.router;
