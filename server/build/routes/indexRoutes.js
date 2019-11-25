"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const datospController_1 = require("../controllers/datospController");
class IndexRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', datospController_1.dp.getAll);
        this.router.get('/:NUA', datospController_1.dp.getOne);
        this.router.post('/', datospController_1.dp.saveOne);
        this.router.delete('/:NUA', datospController_1.dp.deleteOne);
        this.router.put('/:NUA', datospController_1.dp.updateOne);
    }
}
const indexRoutes = new IndexRoutes();
exports.default = indexRoutes.router;
