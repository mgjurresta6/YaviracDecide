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
exports.CronogramaEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const actividad_entity_1 = require("./actividad.entity");
const periodolectivo_entity_1 = require("./periodolectivo.entity");
let CronogramaEntity = class CronogramaEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, fechaCreacion: { required: true, type: () => Date }, responsable: { required: true, type: () => String }, actividad: { required: true, type: () => require("./actividad.entity").ActividadEntity }, periodo: { required: true, type: () => require("./periodolectivo.entity").PeriodoEntity } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CronogramaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_creacion',
        type: 'timestamptz',
        comment: 'Fecha que fue creado el cronograma',
    }),
    __metadata("design:type", Date)
], CronogramaEntity.prototype, "fechaCreacion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'responsable',
        type: 'varchar',
        comment: 'Nombre del usuario que creo el cronograma',
    }),
    __metadata("design:type", String)
], CronogramaEntity.prototype, "responsable", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => actividad_entity_1.ActividadEntity),
    (0, typeorm_1.JoinTable)({ name: 'detalle_cronogramas' }),
    __metadata("design:type", actividad_entity_1.ActividadEntity)
], CronogramaEntity.prototype, "actividad", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => periodolectivo_entity_1.PeriodoEntity),
    (0, typeorm_1.JoinColumn)({ name: 'cronogroma' }),
    __metadata("design:type", periodolectivo_entity_1.PeriodoEntity)
], CronogramaEntity.prototype, "periodo", void 0);
CronogramaEntity = __decorate([
    (0, typeorm_1.Entity)('cronogramas', { schema: 'core' })
], CronogramaEntity);
exports.CronogramaEntity = CronogramaEntity;
//# sourceMappingURL=cronograma.entity.js.map