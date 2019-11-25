"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const proeducontroller_1 = require("../controllers/proeducontroller");
class ProeduRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', proeducontroller_1.proedu.getAll);
        this.router.get('/:NUA', proeducontroller_1.proedu.getOne);
        this.router.post('/', proeducontroller_1.proedu.saveOne);
        this.router.delete('/:NUA', proeducontroller_1.proedu.deleteOne);
        this.router.put('/:NUA', proeducontroller_1.proedu.updateOne);
    }
}
const proeduRoutes = new ProeduRoutes();
exports.default = proeduRoutes.router;
