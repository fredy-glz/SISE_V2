"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const formatoController_1 = require("../controllers/formatoController");
class FormatoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', formatoController_1.formato.getAll);
        this.router.get('/:NUA', formatoController_1.formato.getOne);
        this.router.post('/', formatoController_1.formato.saveOne);
        this.router.delete('/:NUA', formatoController_1.formato.deleteOne);
        this.router.put('/:NUA', formatoController_1.formato.updateOne);
    }
}
const formatoRoutes = new FormatoRoutes();
exports.default = formatoRoutes.router;
