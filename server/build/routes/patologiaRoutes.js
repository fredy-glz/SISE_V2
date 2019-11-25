"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const patologiaController_1 = require("../controllers/patologiaController");
class PatoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', patologiaController_1.pato.getAll);
        this.router.get('/:NUA', patologiaController_1.pato.getOne);
        this.router.post('/', patologiaController_1.pato.saveOne);
        this.router.delete('/:NUA', patologiaController_1.pato.deleteOne);
        this.router.put('/:NUA', patologiaController_1.pato.updateOne);
    }
}
const patoRoutes = new PatoRoutes();
exports.default = patoRoutes.router;
