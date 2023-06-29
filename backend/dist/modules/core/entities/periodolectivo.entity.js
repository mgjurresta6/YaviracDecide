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
exports.PeriodoEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const cronograma_entity_1 = require("./cronograma.entity");
let PeriodoEntity = class PeriodoEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, periodoLectivo: { required: true, type: () => String }, fechaInicioPeriodo: { required: true, type: () => Date }, fechaFinPeriodo: { required: true, type: () => Date }, periodos: { required: true, type: () => require("./cronograma.entity").CronogramaEntity } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], PeriodoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre',
        type: 'varchar',
        comment: 'Nombre del periodo lectivo: Noviembre-Marzo 2022-2',
    }),
    __metadata("design:type", String)
], PeriodoEntity.prototype, "periodoLectivo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_inicio',
        type: 'timestamptz',
        comment: 'Fecha que inicio el periodo lectivo',
    }),
    __metadata("design:type", Date)
], PeriodoEntity.prototype, "fechaInicioPeriodo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha_finalizacion',
        type: 'timestamptz',
        comment: 'Fecha que finalizo el periodo lectivo',
    }),
    __metadata("design:type", Date)
], PeriodoEntity.prototype, "fechaFinPeriodo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => cronograma_entity_1.CronogramaEntity, (periodo) => periodo.id),
    (0, typeorm_1.JoinColumn)({ name: 'cronogramas' }),
    __metadata("design:type", cronograma_entity_1.CronogramaEntity)
], PeriodoEntity.prototype, "periodos", void 0);
PeriodoEntity = __decorate([
    (0, typeorm_1.Entity)('periodo_lectivos', { schema: 'core' })
], PeriodoEntity);
exports.PeriodoEntity = PeriodoEntity;
//# sourceMappingURL=periodolectivo.entity.js.map