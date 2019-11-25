"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const interController_1 = require("../controllers/interController");
class InterRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', interController_1.inter.getAll);
        this.router.get('/:NUA', interController_1.inter.getOne);
        this.router.post('/', interController_1.inter.saveOne);
        this.router.delete('/:NUA', interController_1.inter.deleteOne);
        this.router.put('/:NUA', interController_1.inter.updateOne);
    }
}
const interRoutes = new InterRoutes();
exports.default = interRoutes.router;
