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
let CronogramaEntity = class CronogramaEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, actividad: { required: true, type: () => String }, fechaCreacion: { required: true, type: () => Date }, fechaFinalizacion: { required: true, type: () => Date }, estado: { required: true, type: () => Boolean } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CronogramaEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'actividad',
        type: 'varchar',
        comment: 'Actividad del cronograma',
    }),
    __metadata("design:type", String)
], CronogramaEntity.prototype, "actividad", void 0);
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
        name: 'fecha_finalizacion',
        type: 'timestamptz',
        comment: 'Fecha que fue finalizado el cronograma',
    }),
    __metadata("design:type", Date)
], CronogramaEntity.prototype, "fechaFinalizacion", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estado',
        type: 'boolean',
        comment: 'Estado del cronograma',
        nullable: true,
    }),
    __metadata("design:type", Boolean)
], CronogramaEntity.prototype, "estado", void 0);
CronogramaEntity = __decorate([
    (0, typeorm_1.Entity)('cronogramas', { schema: 'core' })
], CronogramaEntity);
exports.CronogramaEntity = CronogramaEntity;
//# sourceMappingURL=cronograma.entity.js.map