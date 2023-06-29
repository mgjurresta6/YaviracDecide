"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.RoleEntity = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var menu_entity_1 = require("./menu.entity");
var permission_entity_1 = require("./permission.entity");
var user_entity_1 = require("./user.entity");
var RoleEntity = /** @class */ (function () {
    function RoleEntity() {
    }
    RoleEntity.prototype.setCode = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.code) {
                    return [2 /*return*/];
                }
                this.code = this.code.toLowerCase().trim();
                return [2 /*return*/];
            });
        });
    };
    RoleEntity._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return String; } }, createdAt: { required: true, type: function () { return Date; } }, updatedAt: { required: true, type: function () { return Date; } }, deletedAt: { required: true, type: function () { return Date; } }, menus: { required: true, type: function () { return [require("./menu.entity").MenuEntity]; } }, permissions: { required: true, type: function () { return [require("./permission.entity").PermissionEntity]; } }, users: { required: true, type: function () { return [require("./user.entity").UserEntity]; } }, code: { required: true, type: function () { return String; } }, name: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], RoleEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            name: 'created_at',
            type: 'timestamptz',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], RoleEntity.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            name: 'updated_at',
            type: 'timestamptz',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], RoleEntity.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({
            name: 'deleted_at',
            type: 'timestamptz',
            nullable: true
        })
    ], RoleEntity.prototype, "deletedAt");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return menu_entity_1.MenuEntity; }),
        (0, typeorm_1.JoinTable)({
            name: 'menu_role',
            joinColumn: { name: 'role_id' },
            inverseJoinColumn: { name: 'menu_id' }
        })
    ], RoleEntity.prototype, "menus");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return permission_entity_1.PermissionEntity; }),
        (0, typeorm_1.JoinTable)({
            name: 'permission_role',
            joinColumn: { name: 'role_id' },
            inverseJoinColumn: { name: 'permission_id' }
        })
    ], RoleEntity.prototype, "permissions");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return user_entity_1.UserEntity; }, function (user) { return user.roles; }),
        (0, typeorm_1.JoinTable)({
            name: 'role_user',
            joinColumn: { name: 'role_id' },
            inverseJoinColumn: { name: 'user_id' }
        })
    ], RoleEntity.prototype, "users");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'code',
            length: 150,
            unique: true,
            comment: 'Codigo del rol'
        })
    ], RoleEntity.prototype, "code");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'name',
            length: 150,
            unique: true,
            comment: 'Nombre del rol'
        })
    ], RoleEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)()
    ], RoleEntity.prototype, "setCode");
    RoleEntity = __decorate([
        (0, typeorm_1.Entity)('roles', { schema: 'auth' })
    ], RoleEntity);
    return RoleEntity;
}());
exports.RoleEntity = RoleEntity;
