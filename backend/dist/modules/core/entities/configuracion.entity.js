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
exports.ConfiguracionEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const usuario_entity_1 = require("./usuario.entity");
let ConfiguracionEntity = class ConfiguracionEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, codigoReseteo: { required: true, type: () => String }, fechaReseteo: { required: true, type: () => Date }, duracionReseteo: { required: true, type: () => Date }, configuraciones: { required: true, type: () => require("./usuario.entity").UsuarioEntity } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], ConfiguracionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'codigo_reseteo',
        type: 'varchar',
        comment: 'Codigo para recuperar la clave',
    }),
    __metadata("design:type", String)
], ConfiguracionEntity.prototype, "codigoReseteo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'fecha',
        type: 'timestamptz',
        comment: 'Fecha que se envio el codigo',
    }),
    __metadata("design:type", Date)
], ConfiguracionEntity.prototype, "fechaReseteo", void 0);
__decorate([
    (0, typeorm_1.Column)({
        name: 'duracion',
        type: 'timestamptz',
        comment: 'Tiempo de duracion para que utilice el codigo',
    }),
    __metadata("design:type", Date)
], ConfiguracionEntity.prototype, "duracionReseteo", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuario_entity_1.UsuarioEntity),
    (0, typeorm_1.JoinColumn)({ name: 'configuracion' }),
    __metadata("design:type", usuario_entity_1.UsuarioEntity)
], ConfiguracionEntity.prototype, "configuraciones", void 0);
ConfiguracionEntity = __decorate([
    (0, typeorm_1.Entity)('configuraciones', { schema: 'core' })
], ConfiguracionEntity);
exports.ConfiguracionEntity = ConfiguracionEntity;
//# sourceMappingURL=configuracion.entity.js.map