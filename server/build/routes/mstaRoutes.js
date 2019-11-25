"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mstaController_1 = require("../controllers/mstaController");
class MSTARoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', mstaController_1.msta.getAll);
        this.router.get('/:NUA', mstaController_1.msta.getOne);
        this.router.post('/', mstaController_1.msta.saveOne);
        this.router.delete('/:NUA', mstaController_1.msta.deleteOne);
        this.router.put('/:NUA', mstaController_1.msta.updateOne);
    }
}
const mstaRoutes = new MSTARoutes();
exports.default = mstaRoutes.router;
