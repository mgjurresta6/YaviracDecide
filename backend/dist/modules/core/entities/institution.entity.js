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
exports.InstitutionEntity = void 0;
const openapi = require("@nestjs/swagger");
const entities_1 = require("./");
const typeorm_1 = require("typeorm");
let InstitutionEntity = class InstitutionEntity {
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, createAt: { required: true, type: () => Date }, updateAt: { required: true, type: () => Date }, deleteAt: { required: true, type: () => Date }, address: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, state: { required: true, type: () => require("./catalogue.entity").CatalogueEntity }, acronym: { required: true, type: () => String }, cellphone: { required: true, type: () => String }, code: { required: true, type: () => String }, codeSniese: { required: true, type: () => String }, denomination: { required: true, type: () => String }, email: { required: true, type: () => String }, logo: { required: true, type: () => String }, name: { required: true, type: () => String }, phone: { required: true, type: () => String }, shortName: { required: true, type: () => String }, slogan: { required: true, type: () => String }, web: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], InstitutionEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'create_at',
        type: 'timestamptz',
    }),
    __metadata("design:type", Date)
], InstitutionEntity.prototype, "createAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'update_at',
        type: 'timestamptz',
    }),
    __metadata("design:type", Date)
], InstitutionEntity.prototype, "updateAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'delete_at',
        type: 'timestamptz',
    }),
    __metadata("design:type", Date)
], InstitutionEntity.prototype, "deleteAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_1.CatalogueEntity),
    (0, typeorm_1.JoinColumn)({ name: 'address_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InstitutionEntity.prototype, "address", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity),
    (0, typeorm_1.JoinColumn)({ name: 'state_id' }),
    __metadata("design:type", entities_1.CatalogueEntity)
], InstitutionEntity.prototype, "state", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'acronym',
        length: 50,
        default: 'none',
        nullable: false,
        unique: false,
        comment: 'abreviatura del nombre del instituto',
    }),
    __metadata("design:type", String)
], InstitutionEntity.prototype, "acronym", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'cellphone',
        nullable: true,
        length: 50,
        comment: 'teléfono móvil directo de contacto con el instituto',
    }),
    __metadata("design:type", String)
], InstitutionEntity.prototype, "cellphone", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'code',
        length: 50,
        comment: 'código único para identificar al instituto',
    }),
    __metadata("design:type", String)
], InstitutionEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'code_sniese',
        length: 50,
        comment: 'code_sniese designado al instituto',
    }),
    __metadata("design:type", String)
], InstitutionEntity.prototype, "codeSniese", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'denomination',
        length: 255,
        comment: 'denomination para referirse al instituto',
    }),
    __metadata("design:type", String)
], InstitutionEntity.prototype, "denomination", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'email',
        nullable: true,
        comment: 'email para contactar al instituto',
    }),
    __metadata("design:type", String)
], InstitutionEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'logo',
        nullable: true,
        comment: 'logo que identifica al instituto',
    }),
    __metadata("design:type", String)
], InstitutionEntity.prototype, "logo", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'name',
        length: 255,
        comment: 'nombre designado para el instituto',
    }),
    __metadata("design:type", String)
], InstitutionEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'phone',
        nullable: true,
        length: 20,
        comment: 'teléfono directo de contacto con el instituto',
    }),
    __metadata("design:type", String)
], InstitutionEntity.prototype, "phone", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'short_name',
        length: 255,
        comment: 'nombre corto designado para el instituto',
    }),
    __metadata("design:type", String)
], InstitutionEntity.prototype, "shortName", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'slogan',
        nullable: true,
        length: 1000,
        comment: 'slogan que describe al instituto',
    }),
    __metadata("design:type", String)
], InstitutionEntity.prototype, "slogan", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'web',
        nullable: true,
        comment: 'web donde localizar al instituto',
    }),
    __metadata("design:type", String)
], InstitutionEntity.prototype, "web", void 0);
InstitutionEntity = __decorate([
    (0, typeorm_1.Entity)('institutions', { schema: 'core' })
], InstitutionEntity);
exports.InstitutionEntity = InstitutionEntity;
//# sourceMappingURL=institution.entity.js.map