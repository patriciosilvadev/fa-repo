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
Object.defineProperty(exports, "__esModule", { value: true });
const atendimento_model_1 = require("./../../models/atendimento-model");
exports.verificarClienteEmAtendimento = (parametros, tronco) => __awaiter(void 0, void 0, void 0, function* () {
    console.log('parametros: ', parametros);
    let atemdimentos = yield atendimento_model_1.getAtendimentos();
    let existAtm = yield atemdimentos.find(atm => atm.remetente_id == tronco.id && atm.cliente.id);
});
//# sourceMappingURL=verificar-cliente-em-atendimento.js.map