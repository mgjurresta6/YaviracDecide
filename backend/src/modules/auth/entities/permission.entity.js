"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.PermissionEntity = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var role_entity_1 = require("./role.entity");
var PermissionEntity = /** @class */ (function () {
    function PermissionEntity() {
    }
    PermissionEntity._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return String; } }, createdAt: { required: true, type: function () { return Date; } }, updatedAt: { required: true, type: function () { return Date; } }, deletedAt: { required: true, type: function () { return Date; } }, roles: { required: true, type: function () { return [require("./role.entity").RoleEntity]; } }, name: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], PermissionEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            name: 'created_at',
            type: 'timestamptz',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], PermissionEntity.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            name: 'updated_at',
            type: 'timestamptz',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], PermissionEntity.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({
            name: 'deleted_at',
            type: 'timestamptz',
            nullable: true
        })
    ], PermissionEntity.prototype, "deletedAt");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return role_entity_1.RoleEntity; })
    ], PermissionEntity.prototype, "roles");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'name',
            length: 150,
            unique: true,
            comment: 'Nombre del permiso'
        })
    ], PermissionEntity.prototype, "name");
    PermissionEntity = __decorate([
        (0, typeorm_1.Entity)('permissions', { schema: 'auth' })
    ], PermissionEntity);
    return PermissionEntity;
}());
exports.PermissionEntity = PermissionEntity;
