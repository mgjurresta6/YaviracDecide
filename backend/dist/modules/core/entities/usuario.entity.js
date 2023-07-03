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
let UsuarioEntity = class UsuarioEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, cedula: { required: true, type: () => Number }, nombreUsuario: { required: true, type: () => String }, apellidoUsuario: { required: true, type: () => String }, emailUsuario: { required: true, type: () => String }, claveUsuario: { required: true, type: () => String }, rol: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'cedula',
        type: 'integer',
        comment: 'cedula del usuario',
        nullable: true,
    }),
    __metadata("design:type", Number)
], UsuarioEntity.prototype, "cedula", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'nombre',
        type: 'varchar',
        comment: 'Nombre del usuario',
        nullable: true,
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "nombreUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'apellido',
        type: 'varchar',
        comment: 'Apellido del usuario',
        nullable: true,
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "apellidoUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'email',
        type: 'varchar',
        comment: 'Email del usuario',
        nullable: true,
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "emailUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'clave',
        type: 'varchar',
        comment: 'Clave del usuario',
        nullable: true,
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "claveUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'rol',
        type: 'varchar',
        comment: 'rol del usuario',
        nullable: true,
    }),
    __metadata("design:type", String)
], UsuarioEntity.prototype, "rol", void 0);
UsuarioEntity = __decorate([
    (0, typeorm_1.Entity)('usuarios', { schema: 'core' })
], UsuarioEntity);
exports.UsuarioEntity = UsuarioEntity;
//# sourceMappingURL=usuario.entity.js.map