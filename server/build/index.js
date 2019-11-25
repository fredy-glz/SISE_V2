"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const indexRoutes_1 = __importDefault(require("./routes/indexRoutes"));
const divisionRoutes_1 = __importDefault(require("./routes/divisionRoutes"));
const proeduRoutes_1 = __importDefault(require("./routes/proeduRoutes"));
const contactoRoutes_1 = __importDefault(require("./routes/contactoRoutes"));
const patologiaRoutes_1 = __importDefault(require("./routes/patologiaRoutes"));
const habitoRoutes_1 = __importDefault(require("./routes/habitoRoutes"));
const ejercicioRoutes_1 = __importDefault(require("./routes/ejercicioRoutes"));
const criterioRoutes_1 = __importDefault(require("./routes/criterioRoutes"));
const sacaRoutes_1 = __importDefault(require("./routes/sacaRoutes"));
const mstaRoutes_1 = __importDefault(require("./routes/mstaRoutes"));
const antecedenteRoute_1 = __importDefault(require("./routes/antecedenteRoute"));
const examenRoute_1 = __importDefault(require("./routes/examenRoute"));
const historiaMRoutes_1 = __importDefault(require("./routes/historiaMRoutes"));
const consumoRoutes_1 = __importDefault(require("./routes/consumoRoutes"));
const dietaRoutes_1 = __importDefault(require("./routes/dietaRoutes"));
const medidasRoutes_1 = __importDefault(require("./routes/medidasRoutes"));
const interRoutes_1 = __importDefault(require("./routes/interRoutes"));
const dmeRoutes_1 = __importDefault(require("./routes/dmeRoutes"));
const formatoRoutes_1 = __importDefault(require("./routes/formatoRoutes"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
class Server {
    constructor() {
        this.app = express_1.default();
        this.config();
        this.routes();
    }
    config() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(morgan_1.default('dev'));
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: false }));
    }
    routes() {
        this.app.use('/nutricion/dp', indexRoutes_1.default);
        this.app.use('/nutricion/division', divisionRoutes_1.default);
        this.app.use('/nutricion/proedu', proeduRoutes_1.default);
        this.app.use('/nutricion/contacto', contactoRoutes_1.default);
        this.app.use('/nutricion/patologia', patologiaRoutes_1.default);
        this.app.use('/nutricion/habito', habitoRoutes_1.default);
        this.app.use('/nutricion/ejercicio', ejercicioRoutes_1.default);
        this.app.use('/nutricion/criterio', criterioRoutes_1.default);
        this.app.use('/nutricion/saca', sacaRoutes_1.default);
        this.app.use('/nutricion/msta', mstaRoutes_1.default);
        this.app.use('/nutricion/antecedente', antecedenteRoute_1.default);
        this.app.use('/nutricion/examen', examenRoute_1.default);
        this.app.use('/nutricion/hmedica', historiaMRoutes_1.default);
        this.app.use('/nutricion/hmedicamn', historiaMRoutes_1.default);
        this.app.use('/nutricion/consumo', consumoRoutes_1.default);
        this.app.use('/nutricion/dieta', dietaRoutes_1.default);
        this.app.use('/nutricion/medidas', medidasRoutes_1.default);
        this.app.use('/nutricion/inter', interRoutes_1.default);
        this.app.use('/nutricion/dme', dmeRoutes_1.default);
        this.app.use('/nutricion/formato', formatoRoutes_1.default);
    }
    start() {
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }
}
const server = new Server();
server.start();
