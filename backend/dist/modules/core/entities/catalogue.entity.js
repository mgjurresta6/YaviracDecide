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
var CatalogueEntity_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogueEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../shared/enums");
let CatalogueEntity = CatalogueEntity_1 = class CatalogueEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, parent: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, children: { required: true, type: () => [require("./catalogue.entity").CatalogueEntity] }, code: { required: true, type: () => String }, description: { required: true, type: () => String }, isVisible: { required: true, type: () => Boolean }, name: { required: true, type: () => String }, state: { required: true, type: () => String, enum: require("../../../shared/enums/catalogue.enum").CatalogueStateEnum }, type: { required: true, enum: require("../../../shared/enums/catalogue.enum").CatalogueTypeEnum } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], CatalogueEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de creacion del registro',
    }),
    __metadata("design:type", Date)
], CatalogueEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
        comment: 'Fecha de actualizacion de la ultima actualizacion del registro',
    }),
    __metadata("design:type", Date)
], CatalogueEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamptz',
        nullable: true,
        comment: 'Fecha de eliminacion del registro',
    }),
    __metadata("design:type", Date)
], CatalogueEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => CatalogueEntity_1, (category) => category.children),
    __metadata("design:type", CatalogueEntity)
], CatalogueEntity.prototype, "parent", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => CatalogueEntity_1, (category) => category.parent),
    __metadata("design:type", Array)
], CatalogueEntity.prototype, "children", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'code',
        comment: 'Nombre del producto',
    }),
    __metadata("design:type", String)
], CatalogueEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'description',
        comment: 'Nombre del producto',
    }),
    __metadata("design:type", String)
], CatalogueEntity.prototype, "description", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', {
        name: 'is_visible',
        default: true,
        comment: 'true=visible, false=no visible',
    }),
    __metadata("design:type", Boolean)
], CatalogueEntity.prototype, "isVisible", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'name',
        comment: 'Nombre del producto',
    }),
    __metadata("design:type", String)
], CatalogueEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'state',
        enum: enums_1.CatalogueStateEnum,
        comment: 'Nombre del producto',
    }),
    __metadata("design:type", String)
], CatalogueEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)('enum', {
        name: 'type',
        enum: enums_1.CatalogueTypeEnum,
        comment: 'Nombre del producto',
    }),
    __metadata("design:type", String)
], CatalogueEntity.prototype, "type", void 0);
CatalogueEntity = CatalogueEntity_1 = __decorate([
    (0, typeorm_1.Entity)('catalogues', { schema: 'core' })
], CatalogueEntity);
exports.CatalogueEntity = CatalogueEntity;
//# sourceMappingURL=catalogue.entity.js.map