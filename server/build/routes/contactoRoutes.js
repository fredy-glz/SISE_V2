"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const contactoController_1 = require("../controllers/contactoController");
class ContactoRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', contactoController_1.contacto.getAll);
        this.router.get('/:NUA', contactoController_1.contacto.getOne);
        this.router.post('/', contactoController_1.contacto.saveOne);
        this.router.delete('/:NUA', contactoController_1.contacto.deleteOne);
        this.router.put('/:NUA', contactoController_1.contacto.updateOne);
    }
}
const contactoRoutes = new ContactoRoutes();
exports.default = contactoRoutes.router;
