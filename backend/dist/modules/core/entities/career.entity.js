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
exports.CareerEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const entities_1 = require("./");
let CareerEntity = class CareerEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, institution: { required: true, type: () => require("./institution.entity").InstitutionEntity }, modality: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, state: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, type: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, acronym: { required: true, type: () => String }, code: { required: true, type: () => String }, codeSniese: { required: true, type: () => String }, degree: { required: true, type: () => String }, logo: { required: true, type: () => String }, name: { required: true, type: () => String }, resolutionNumber: { required: true, type: () => String }, shortName: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CareerEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de creacion de la carrera',
    }),
    __metadata("design:type", Date)
], CareerEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de actualizacion de la carrera',
    }),
    __metadata("design:type", Date)
], CareerEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamptz',
        nullable: true,
        comment: 'Fecha de eliminacion de la carrera',
    }),
    __metadata("design:type", Date)
], CareerEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.InstitutionEntity, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'institution_id' }),
    __metadata("design:type", entities_1.InstitutionEntity)
], CareerEntity.prototype, "institution", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'modality_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], CareerEntity.prototype, "modality", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'state_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], CareerEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, {
        nullable: true,
    }),
    (0, typeorm_1.JoinColumn)({ name: 'type_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], CareerEntity.prototype, "type", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'acronym',
        comment: 'Acronimo de la carrera Ej. DS, MKT, GN',
    }),
    __metadata("design:type", String)
], CareerEntity.prototype, "acronym", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'code',
        comment: 'Codigo de la carrera',
    }),
    __metadata("design:type", String)
], CareerEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        comment: 'Codigo sniese de la carrera',
        name: 'code_sniese',
    }),
    __metadata("design:type", String)
], CareerEntity.prototype, "codeSniese", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'degree',
        comment: 'Titulo que otorga la carrera',
    }),
    __metadata("design:type", String)
], CareerEntity.prototype, "degree", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'logo',
        nullable: true,
        comment: 'Logo de la carrera',
    }),
    __metadata("design:type", String)
], CareerEntity.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'name',
        comment: 'Nombre de la carrera',
    }),
    __metadata("design:type", String)
], CareerEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('float', {
        comment: 'Numero de resolucion de la carrera',
        name: 'resolution_number',
    }),
    __metadata("design:type", String)
], CareerEntity.prototype, "resolutionNumber", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'short_name',
        comment: 'Nombre corto de la carrera',
    }),
    __metadata("design:type", String)
], CareerEntity.prototype, "shortName", void 0);
CareerEntity = __decorate([
    (0, typeorm_1.Entity)('careers', { schema: 'core' })
], CareerEntity);
exports.CareerEntity = CareerEntity;
//# sourceMappingURL=career.entity.js.map