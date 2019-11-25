"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const antecedenteController_1 = require("../controllers/antecedenteController");
class AntRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', antecedenteController_1.ant.getAll);
        this.router.get('/:NUA', antecedenteController_1.ant.getOne);
        this.router.post('/', antecedenteController_1.ant.saveOne);
        this.router.delete('/:NUA', antecedenteController_1.ant.deleteOne);
        this.router.put('/:NUA', antecedenteController_1.ant.updateOne);
    }
}
const antRoutes = new AntRoutes();
exports.default = antRoutes.router;
