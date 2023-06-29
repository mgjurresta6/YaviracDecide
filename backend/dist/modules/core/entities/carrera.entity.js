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
exports.CarreraEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const curso_entity_1 = require("./curso.entity");
let CarreraEntity = class CarreraEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, carrera: { required: true, type: () => String }, carreras: { required: true, type: () => [require("./curso.entity").CursoEntity] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CarreraEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre',
        type: 'varchar',
        comment: 'Nombre de la carrera: marketing',
    }),
    __metadata("design:type", String)
], CarreraEntity.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => curso_entity_1.CursoEntity, (carrera) => carrera.id),
    (0, typeorm_1.JoinColumn)({ name: 'carrera' }),
    __metadata("design:type", Array)
], CarreraEntity.prototype, "carreras", void 0);
CarreraEntity = __decorate([
    (0, typeorm_1.Entity)('carreras', { schema: 'core' })
], CarreraEntity);
exports.CarreraEntity = CarreraEntity;
//# sourceMappingURL=carrera.entity.js.map