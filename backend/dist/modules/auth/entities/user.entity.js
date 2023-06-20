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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const Bcrypt = require("bcrypt");
const class_transformer_1 = require("class-transformer");
const entities_1 = require("../../core/entities");
const role_entity_1 = require("./role.entity");
let UserEntity = class UserEntity {
    async hashPassword() {
        if (!this.password) {
            return;
        }
        this.password = await Bcrypt.hash(this.password, 10);
    }
    async checkBirthdate() {
        if (!this.birthdate) {
            return;
        }
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, roles: { required: true, type: () => [require("./role.entity").RoleEntity] }, student: { required: true, type: () => Object }, bloodType: { required: true, type: () => Object }, ethnicOrigin: { required: true, type: () => Object }, identificationType: { required: true, type: () => Object }, gender: { required: true, type: () => Object }, maritalStatus: { required: true, type: () => Object }, sex: { required: true, type: () => Object }, activatedAt: { required: true, type: () => Date }, birthdate: { required: true, type: () => Date }, email: { required: true, type: () => String }, emailVerifiedAt: { required: true, type: () => Date }, identification: { required: true, type: () => String }, lastname: { required: true, type: () => String }, password: { required: true, type: () => String }, passwordChanged: { required: true, type: () => Boolean }, personalEmail: { required: true, type: () => String }, phone: { required: true, type: () => String }, maxAttempts: { required: true, type: () => Number }, name: { required: true, type: () => String }, suspendedAt: { required: true, type: () => Date }, username: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], UserEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamptz',
        nullable: true,
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => role_entity_1.RoleEntity, (role) => role.users, { eager: true }),
    __metadata("design:type", Array)
], UserEntity.prototype, "roles", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => entities_1.StudentEntity, (student) => student.user),
    __metadata("design:type", typeof (_a = typeof entities_1.StudentEntity !== "undefined" && entities_1.StudentEntity) === "function" ? _a : Object)
], UserEntity.prototype, "student", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'blood_type_id' }),
    __metadata("design:type", typeof (_b = typeof entities_1.CatalogueEntity !== "undefined" && entities_1.CatalogueEntity) === "function" ? _b : Object)
], UserEntity.prototype, "bloodType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'ethnic_origin_id' }),
    __metadata("design:type", typeof (_c = typeof entities_1.CatalogueEntity !== "undefined" && entities_1.CatalogueEntity) === "function" ? _c : Object)
], UserEntity.prototype, "ethnicOrigin", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'identification_type_id' }),
    __metadata("design:type", typeof (_d = typeof entities_1.CatalogueEntity !== "undefined" && entities_1.CatalogueEntity) === "function" ? _d : Object)
], UserEntity.prototype, "identificationType", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'gender_id' }),
    __metadata("design:type", typeof (_e = typeof entities_1.CatalogueEntity !== "undefined" && entities_1.CatalogueEntity) === "function" ? _e : Object)
], UserEntity.prototype, "gender", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'marital_status_id' }),
    __metadata("design:type", typeof (_f = typeof entities_1.CatalogueEntity !== "undefined" && entities_1.CatalogueEntity) === "function" ? _f : Object)
], UserEntity.prototype, "maritalStatus", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => entities_1.CatalogueEntity, { nullable: true }),
    (0, typeorm_1.JoinColumn)({ name: 'sex_id' }),
    __metadata("design:type", typeof (_g = typeof entities_1.CatalogueEntity !== "undefined" && entities_1.CatalogueEntity) === "function" ? _g : Object)
], UserEntity.prototype, "sex", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamptz', {
        name: 'activated_at',
        nullable: true,
        comment: 'Fecha de ultimo login',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "activatedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('date', {
        name: 'birthdate',
        nullable: true,
        comment: 'Fecha de nacimiento',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "birthdate", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'email',
        length: 150,
        unique: true,
        comment: 'Correo Electronico',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'email_verified_at',
        nullable: true,
        comment: 'Verificacion de correo',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "emailVerifiedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'identification',
        length: 255,
        unique: true,
        nullable: true,
        comment: 'Numero de documento puede ser la cedula',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "identification", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'lastname', length: 255, comment: 'Apellidos' }),
    __metadata("design:type", String)
], UserEntity.prototype, "lastname", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)('varchar', {
        name: 'password',
        length: 100,
        comment: 'Contraseña',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.Column)('boolean', {
        name: 'password_changed',
        default: false,
        comment: 'true: ya cambió la contraseña y False:no',
    }),
    __metadata("design:type", Boolean)
], UserEntity.prototype, "passwordChanged", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'personal_email',
        length: 150,
        nullable: true,
        comment: 'Correo Electronico Personal',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "personalEmail", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'phone',
        length: 20,
        nullable: true,
        comment: 'Teléfono',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "phone", void 0);
__decorate([
    (0, class_transformer_1.Exclude)(),
    (0, typeorm_1.Column)('int', {
        name: 'max_attempts',
        default: 3,
        comment: 'Intentos máximos para errar la contraseña, si llega a cero el usuario se bloquea',
    }),
    __metadata("design:type", Number)
], UserEntity.prototype, "maxAttempts", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', { name: 'name', length: 255, comment: 'Nombres' }),
    __metadata("design:type", String)
], UserEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)('timestamp', {
        name: 'suspended_at',
        nullable: true,
        comment: 'Fecha de la ultima suspension del usuario',
    }),
    __metadata("design:type", Date)
], UserEntity.prototype, "suspendedAt", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'username',
        length: 100,
        comment: 'Nombre de usuario para ingreso al sistema',
    }),
    __metadata("design:type", String)
], UserEntity.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserEntity.prototype, "hashPassword", null);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserEntity.prototype, "checkBirthdate", null);
UserEntity = __decorate([
    (0, typeorm_1.Entity)('users', { schema: 'auth' })
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map