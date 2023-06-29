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
exports.UsuarioEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const curso_entity_1 = require("./curso.entity");
const rol_entity_1 = require("./rol.entity");
const usuariotipo_entity_1 = require("./usuariotipo.entity");
const resultado_entity_1 = require("./resultado.entity");
const configuracion_entity_1 = require("./configuracion.entity");
let UsuarioEntity = class UsuarioEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { cedula: { required: true, type: () => Number }, nombreUsuario: { required: true, type: () => String }, apellidoUsuario: { required: true, type: () => String }, emailUsuario: { required: true, type: () => String }, claveUsuario: { required: true, type: () => String }, estadoVoto: { required: true, type: () => Boolean }, ultimoVoto: { required: true, type: () => String }, estadoUsuario: { required: true, type: () => String }, rol: { required: true, type: () => require("./rol.entity").RolEntity }, tipo: { required: true, type: () => require("./usuariotipo.entity").TipoEntity }, curso: { required: true, type: () => require("./curso.entity").CursoEntity }, resultados: { required: true, type: () => [require("./resultado.entity").ResultadoEntity] }, configuraciones: { required: true, type: () => [require("./configuracion.entity").ConfiguracionEntity] } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre',
        type: 'varchar',
        comment: 'Nombre del usuario',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombreUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'apellido',
        type: 'varchar',
        comment: 'Apellido del usuario',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "apellidoUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'email',
        type: 'varchar',
        comment: 'Email del usuario',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "emailUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'clave',
        type: 'varchar',
        comment: 'Clave del usuario',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "claveUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estado_voto',
        type: 'boolean',
        comment: 'Si el usuario voto o aun no',
    }),
    __metadata("design:type", Boolean)
], UsuarioEntity.prototype, "estadoVoto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'periodo_ultimo_voto',
        type: 'varchar',
        comment: 'El ultimo periodo que voto',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "ultimoVoto", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'estado',
        type: 'boolean',
        comment: 'EStado del ususario: Activo, Inactivo',
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "estadoUsuario", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => rol_entity_1.RolEntity),
    (0, typeorm_1.JoinColumn)({ name: 'rol_id' }),
    __metadata("design:type", rol_entity_1.RolEntity)
], UsuarioEntity.prototype, "rol", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuariotipo_entity_1.TipoEntity),
    (0, typeorm_1.JoinColumn)({ name: 'tipo_usuario' }),
    __metadata("design:type", usuariotipo_entity_1.TipoEntity)
], UsuarioEntity.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => curso_entity_1.CursoEntity),
    (0, typeorm_1.JoinColumn)({ name: 'curso_id' }),
    __metadata("design:type", curso_entity_1.CursoEntity)
], UsuarioEntity.prototype, "curso", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => resultado_entity_1.ResultadoEntity, (resultado) => resultado.id),
    (0, typeorm_1.JoinColumn)({ name: 'usuario' }),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "resultados", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => configuracion_entity_1.ConfiguracionEntity, (configuracion) => configuracion.id),
    (0, typeorm_1.JoinColumn)({ name: 'configuracion' }),
    __metadata("design:type", Array)
], UsuarioEntity.prototype, "configuraciones", void 0);
UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)('usuarios', { schema: 'core' })
], UsuarioEntity);
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario.entity.js.map