"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TipoListaEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const lista_entity_1 = require("./lista.entity");
let TipoListaEntity = class TipoListaEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, listaTipo: { required: true, type: () => String }, tipoListas: { required: true, type: () => [require("./lista.entity").ListaEntity] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], TipoListaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre',
        type: 'varchar',
        comment: 'Tipo de lista: Docente, estudiante',
    }),
    __metadata("design:type", String)
], TipoListaEntity.prototype, "listaTipo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lista_entity_1.ListaEntity, (tipoLista) => tipoLista.id),
    (0, typeorm_1.JoinColumn)({ name: 'tipo_lista' }),
    __metadata("design:type", Array)
], TipoListaEntity.prototype, "tipoListas", void 0);
TipoListaEntity = __decorate([
    (0, typeorm_1.Entity)('tipo_listas', { schema: 'core' })
], TipoListaEntity);
exports.TipoListaEntity = TipoListaEntity;
//# sourceMappingURL=tipolista.entity.js.map