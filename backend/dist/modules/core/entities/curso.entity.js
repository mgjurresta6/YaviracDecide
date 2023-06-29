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
exports.CursoEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const carrera_entity_1 = require("./carrera.entity");
const usuario_entity_1 = require("./usuario.entity");
const jornada_entity_1 = require("./jornada.entity");
const paralelo_entity_1 = require("./paralelo.entity");
let CursoEntity = class CursoEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => Number }, acronimoCarrera: { required: true, type: () => String }, carrera: { required: true, type: () => require("./carrera.entity").CarreraEntity }, jornada: { required: true, type: () => require("./jornada.entity").JornadaEntity }, paralelo: { required: true, type: () => require("./carrera.entity").CarreraEntity }, cursos: { required: true, type: () => [require("./usuario.entity").UsuarioEntity] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], CursoEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre',
        type: 'varchar',
        comment: 'Acronimo: DS',
    }),
    __metadata("design:type", String)
], CursoEntity.prototype, "acronimoCarrera", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => carrera_entity_1.CarreraEntity),
    (0, typeorm_1.JoinColumn)({ name: 'curso_id' }),
    __metadata("design:type", carrera_entity_1.CarreraEntity)
], CursoEntity.prototype, "carrera", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => jornada_entity_1.JornadaEntity),
    (0, typeorm_1.JoinColumn)({ name: 'jornada_id' }),
    __metadata("design:type", jornada_entity_1.JornadaEntity)
], CursoEntity.prototype, "jornada", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => paralelo_entity_1.ParaleloEntity),
    (0, typeorm_1.JoinColumn)({ name: 'paralelo_id' }),
    __metadata("design:type", carrera_entity_1.CarreraEntity)
], CursoEntity.prototype, "paralelo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => usuario_entity_1.UsuarioEntity, (curso) => curso.cedula),
    (0, typeorm_1.JoinColumn)({ name: 'curso' }),
    __metadata("design:type", Array)
], CursoEntity.prototype, "cursos", void 0);
CursoEntity = __decorate([
    (0, typeorm_1.Entity)('cursos', { schema: 'core' })
], CursoEntity);
exports.CursoEntity = CursoEntity;
//# sourceMappingURL=curso.entity.js.map