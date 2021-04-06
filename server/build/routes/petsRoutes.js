"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const petsControllers_1 = __importDefault(require("../controllers/petsControllers"));
class PetsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', petsControllers_1.default.list);
        this.router.get('/:id', petsControllers_1.default.getOne);
        this.router.post('/', petsControllers_1.default.create);
        this.router.put('/:id', petsControllers_1.default.update);
        this.router.delete('/:id', petsControllers_1.default.delete);
    }
}
const petsRoutes = new PetsRoutes();
exports.default = petsRoutes.router;
