"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = __importDefault(require("../database"));
class ProeduController {
    getAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var user = yield database_1.default.query('SELECT * FROM ProgramasEduUG');
            res.json(user);
        });
    }
    getOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { NUA } = req.params;
            const alumno = yield database_1.default.query('SELECT * FROM ProgramasEduUG WHERE Division_Id = ?', NUA);
            if (alumno.length > 0) {
                return res.json(alumno[0]);
            }
            res.status(404).json({ message: 'Not Found' });
        });
    }
    deleteOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { NUA } = req.params;
            yield database_1.default.query('DELETE  FROM ProgramasEduUG WHERE Division_Id = ?', [NUA]);
            res.json({ message: 'Usuario Eliminado' });
        });
    }
    saveOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield database_1.default.query('INSERT INTO ProgramasEduUG set ?'[req.body]);
            res.json({ message: 'Usuario Guardado' });
        });
    }
    updateOne(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { NUA } = req.params;
            yield database_1.default.query('UPDATE ProgramasEduUG set ? WHERE Division_Id = ?', [req.body, NUA]);
            res.json({ message: 'Usuario Actualizado' });
        });
    }
}
exports.proedu = new ProeduController();
