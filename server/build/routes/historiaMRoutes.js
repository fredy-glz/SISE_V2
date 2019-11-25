"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const historiaMController_1 = require("../controllers/historiaMController");
class MedicaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', historiaMController_1.medica.getAll);
        this.router.get('/:NUA', historiaMController_1.medica.getOne);
        this.router.post('/', historiaMController_1.medica.saveOne);
        this.router.delete('/:NUA', historiaMController_1.medica.deleteOne);
        this.router.put('/:NUA', historiaMController_1.medica.updateOne);
    }
}
const medicaRoutes = new MedicaRoutes();
exports.default = medicaRoutes.router;
