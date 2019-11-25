"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const examenController_1 = require("../controllers/examenController");
class ExamenRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', examenController_1.examen.getAll);
        this.router.get('/:NUA', examenController_1.examen.getOne);
        this.router.post('/', examenController_1.examen.saveOne);
        this.router.delete('/:NUA', examenController_1.examen.deleteOne);
        this.router.put('/:NUA', examenController_1.examen.updateOne);
    }
}
const examenRoutes = new ExamenRoutes();
exports.default = examenRoutes.router;
