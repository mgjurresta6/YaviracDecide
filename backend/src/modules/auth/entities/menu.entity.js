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
exports.MenuEntity = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var menu_enum_1 = require("../enums/menu.enum");
var entities_1 = require("@auth/entities");
var MenuEntity = /** @class */ (function () {
    function MenuEntity() {
    }
    MenuEntity_1 = MenuEntity;
    MenuEntity.prototype.setCode = function () {
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
    MenuEntity._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return String; } }, createdAt: { required: true, type: function () { return Date; } }, updatedAt: { required: true, type: function () { return Date; } }, deletedAt: { required: true, type: function () { return Date; } }, parent: { required: true, type: function () { return require("./menu.entity").MenuEntity; } }, children: { required: true, type: function () { return [require("./menu.entity").MenuEntity]; } }, roles: { required: true, type: function () { return [Object]; } }, code: { required: true, type: function () { return String; } }, icon: { required: true, type: function () { return String; } }, isVisible: { required: true, type: function () { return Boolean; } }, label: { required: true, type: function () { return String; } }, routerLink: { required: true, type: function () { return String; } }, type: { required: true, type: function () { return String; }, "enum": require("../enums/menu.enum").MenuTypeEnum } };
    };
    var MenuEntity_1;
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], MenuEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            name: 'created_at',
            type: 'timestamptz',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], MenuEntity.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            name: 'updated_at',
            type: 'timestamptz',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], MenuEntity.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({
            name: 'deleted_at',
            type: 'timestamptz',
            nullable: true
        })
    ], MenuEntity.prototype, "deletedAt");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return MenuEntity_1; }, function (category) { return category.children; }),
        (0, typeorm_1.JoinColumn)({ name: 'parent_id' })
    ], MenuEntity.prototype, "parent");
    __decorate([
        (0, typeorm_1.OneToMany)(function () { return MenuEntity_1; }, function (category) { return category.parent; })
    ], MenuEntity.prototype, "children");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return entities_1.RoleEntity; })
    ], MenuEntity.prototype, "roles");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'code',
            unique: true,
            comment: 'Codigo unico'
        })
    ], MenuEntity.prototype, "code");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'icon',
            comment: 'Icono'
        })
    ], MenuEntity.prototype, "icon");
    __decorate([
        (0, typeorm_1.Column)('boolean', {
            name: 'is_visible',
            comment: 'True=es visible, False=no es visible para el usuario final'
        })
    ], MenuEntity.prototype, "isVisible");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'label',
            unique: true,
            comment: 'Nombre del menu'
        })
    ], MenuEntity.prototype, "label");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'router_link',
            unique: true,
            nullable: true,
            comment: 'Nombre de la ruta'
        })
    ], MenuEntity.prototype, "routerLink");
    __decorate([
        (0, typeorm_1.Column)('enum', {
            name: 'type',
            "enum": menu_enum_1.MenuTypeEnum,
            comment: 'Tipo de menu'
        })
    ], MenuEntity.prototype, "type");
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)()
    ], MenuEntity.prototype, "setCode");
    MenuEntity = MenuEntity_1 = __decorate([
        (0, typeorm_1.Entity)('menus', { schema: 'auth' })
    ], MenuEntity);
    return MenuEntity;
}());
exports.MenuEntity = MenuEntity;
