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
exports.DignidadEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const lista_entity_1 = require("./lista.entity");
let DignidadEntity = class DignidadEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, nombreDignidad: { required: true, type: () => String }, dignidades: { required: true, type: () => [require("./lista.entity").ListaEntity] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], DignidadEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre',
        type: 'varchar',
        comment: 'Nombre de la dignidad: Presidente',
    }),
    __metadata("design:type", String)
], DignidadEntity.prototype, "nombreDignidad", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => lista_entity_1.ListaEntity, (dignidad) => dignidad.id),
    (0, typeorm_1.JoinColumn)({ name: 'dignidad' }),
    __metadata("design:type", Array)
], DignidadEntity.prototype, "dignidades", void 0);
DignidadEntity = __decorate([
    (0, typeorm_1.Entity)('dignidades', { schema: 'core' })
], DignidadEntity);
exports.DignidadEntity = DignidadEntity;
//# sourceMappingURL=dignidad.entity.js.map