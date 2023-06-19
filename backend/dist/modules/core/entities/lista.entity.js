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
exports.ListaEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let ListaEntity = class ListaEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, nombreLista: { required: true, type: () => String }, logo: { required: true, type: () => String }, slogan: { required: true, type: () => String }, color: { required: true, type: () => String }, numeroLista: { required: true, type: () => String }, propuesta: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ListaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre',
        type: 'varchar',
        comment: 'Nombre de la lista',
    }),
    __metadata("design:type", String)
], ListaEntity.prototype, "nombreLista", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'logo',
        type: 'varchar',
        comment: 'Logo de la lista',
    }),
    __metadata("design:type", String)
], ListaEntity.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'slogan',
        type: 'varchar',
        comment: 'Slogan de la lista',
    }),
    __metadata("design:type", String)
], ListaEntity.prototype, "slogan", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'color',
        type: 'varchar',
        comment: 'Color de la lista',
    }),
    __metadata("design:type", String)
], ListaEntity.prototype, "color", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'numero',
        type: 'integer',
        comment: 'Numero de la lista',
    }),
    __metadata("design:type", String)
], ListaEntity.prototype, "numeroLista", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'propuesta',
        type: 'varchar',
        comment: 'propuesta de la lista',
    }),
    __metadata("design:type", String)
], ListaEntity.prototype, "propuesta", void 0);
ListaEntity = __decorate([
    (0, typeorm_1.Entity)('listas', { schema: 'core' })
], ListaEntity);
exports.ListaEntity = ListaEntity;
//# sourceMappingURL=lista.entity.js.map