"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dmeController_1 = require("../controllers/dmeController");
class dmeRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', dmeController_1.dme.getAll);
        this.router.get('/:NUA', dmeController_1.dme.getOne);
        this.router.post('/', dmeController_1.dme.saveOne);
        this.router.delete('/:NUA', dmeController_1.dme.deleteOne);
        this.router.put('/:NUA', dmeController_1.dme.updateOne);
    }
}
const DMERoutes = new dmeRoutes();
exports.default = DMERoutes.router;
