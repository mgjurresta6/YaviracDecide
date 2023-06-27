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
exports.VotoEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const lista_entity_1 = require("./lista.entity");
const resultado_entity_1 = require("./resultado.entity");
let VotoEntity = class VotoEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, votoUsuario: { required: true, type: () => Boolean }, horaVoto: { required: true, type: () => Date }, votos: { required: true, type: () => [require("./resultado.entity").ResultadoEntity] }, lista: { required: true, type: () => require("./lista.entity").ListaEntity } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], VotoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'voto',
        type: 'boolean',
        comment: 'Voto para la lista elegida',
    }),
    __metadata("design:type", Boolean)
], VotoEntity.prototype, "votoUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'hora_voto',
        type: 'timestamptz',
        comment: 'Fecha y hora que se realizo el voto',
    }),
    __metadata("design:type", Date)
], VotoEntity.prototype, "horaVoto", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => resultado_entity_1.ResultadoEntity, (voto) => voto.id),
    (0, typeorm_1.JoinColumn)({ name: 'voto' }),
    __metadata("design:type", Array)
], VotoEntity.prototype, "votos", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => lista_entity_1.ListaEntity),
    (0, typeorm_1.JoinColumn)({ name: 'lista' }),
    __metadata("design:type", lista_entity_1.ListaEntity)
], VotoEntity.prototype, "lista", void 0);
VotoEntity = __decorate([
    (0, typeorm_1.Entity)('votos', { schema: 'core' })
], VotoEntity);
exports.VotoEntity = VotoEntity;
//# sourceMappingURL=voto.entity.js.map