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
exports.RoleEntity = void 0;
const openapi = require("@nestjs/swagger");
const typeorm_1 = require("typeorm");
const menu_entity_1 = require("./menu.entity");
const permission_entity_1 = require("./permission.entity");
const user_entity_1 = require("./user.entity");
let RoleEntity = class RoleEntity {
    async setCode() {
        if (!this.code) {
            return;
        }
        this.code = this.code.toLowerCase().trim();
    }
    static _OPENAPI_METADATA_FACTORY() {
        return { id: { required: true, type: () => String }, createdAt: { required: true, type: () => Date }, updatedAt: { required: true, type: () => Date }, deletedAt: { required: true, type: () => Date }, menus: { required: true, type: () => [require("./menu.entity").MenuEntity] }, permissions: { required: true, type: () => [require("./permission.entity").PermissionEntity] }, users: { required: true, type: () => [require("./user.entity").UserEntity] }, code: { required: true, type: () => String }, name: { required: true, type: () => String } };
    }
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], RoleEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({
        name: 'created_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], RoleEntity.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({
        name: 'updated_at',
        type: 'timestamptz',
        default: () => 'CURRENT_TIMESTAMP',
    }),
    __metadata("design:type", Date)
], RoleEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)({
        name: 'deleted_at',
        type: 'timestamptz',
        nullable: true,
    }),
    __metadata("design:type", Date)
], RoleEntity.prototype, "deletedAt", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => menu_entity_1.MenuEntity),
    (0, typeorm_1.JoinTable)({
        name: 'menu_role',
        joinColumn: { name: 'role_id' },
        inverseJoinColumn: { name: 'menu_id' },
    }),
    __metadata("design:type", Array)
], RoleEntity.prototype, "menus", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => permission_entity_1.PermissionEntity),
    (0, typeorm_1.JoinTable)({
        name: 'permission_role',
        joinColumn: { name: 'role_id' },
        inverseJoinColumn: { name: 'permission_id' },
    }),
    __metadata("design:type", Array)
], RoleEntity.prototype, "permissions", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => user_entity_1.UserEntity, (user) => user.roles),
    (0, typeorm_1.JoinTable)({
        name: 'role_user',
        joinColumn: { name: 'role_id' },
        inverseJoinColumn: { name: 'user_id' },
    }),
    __metadata("design:type", Array)
], RoleEntity.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'code',
        length: 150,
        unique: true,
        comment: 'Codigo del rol',
    }),
    __metadata("design:type", String)
], RoleEntity.prototype, "code", void 0);
__decorate([
    (0, typeorm_1.Column)('varchar', {
        name: 'name',
        length: 150,
        unique: true,
        comment: 'Nombre del rol',
    }),
    __metadata("design:type", String)
], RoleEntity.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.BeforeInsert)(),
    (0, typeorm_1.BeforeUpdate)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RoleEntity.prototype, "setCode", null);
RoleEntity = __decorate([
    (0, typeorm_1.Entity)('roles', { schema: 'auth' })
], RoleEntity);
exports.RoleEntity = RoleEntity;
//# sourceMappingURL=role.entity.js.map