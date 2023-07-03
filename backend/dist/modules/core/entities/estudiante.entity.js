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
exports.EstudianteEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
let EstudianteEntity = class EstudianteEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, cedula: { required: true, type: () => Number }, nombreEstudiante: { required: true, type: () => String }, apellidoEstudiante: { required: true, type: () => String }, emailEstudiante: { required: true, type: () => String }, claveEstudiante: { required: true, type: () => String }, jornada: { required: true, type: () => String }, carrera: { required: true, type: () => String }, paralelo: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cedula',
        type: 'integer',
        comment: 'cedula del estudiante',
        nullable: true,
    }),
    __metadata("design:type", Number)
], EstudianteEntity.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre',
        type: 'varchar',
        comment: 'Nombre del estudiante',
        nullable: true,
    }),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "nombreEstudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'apellido',
        type: 'varchar',
        comment: 'Apellido del estudiante',
        nullable: true,
    }),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "apellidoEstudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'email',
        type: 'varchar',
        comment: 'Email del usuario',
        nullable: true,
    }),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "emailEstudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'clave',
        type: 'varchar',
        comment: 'Clave del estudiante',
        nullable: true,
    }),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "claveEstudiante", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'jornada',
        type: 'varchar',
        comment: 'jornada del estudiante',
        nullable: true,
    }),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "jornada", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'carrera',
        type: 'varchar',
        comment: 'carrera del estudiante',
        nullable: true,
    }),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'paralelo',
        type: 'varchar',
        comment: 'paralelo del estudiante',
        nullable: true,
    }),
    __metadata("design:type", String)
], EstudianteEntity.prototype, "paralelo", void 0);
EstudianteEntity = __decorate([
    (0, typeorm_1.Entity)('estudiantes', { schema: 'core' })
], EstudianteEntity);
exports.EstudianteEntity = EstudianteEntity;
//# sourceMappingURL=estudiante.entity.js.map