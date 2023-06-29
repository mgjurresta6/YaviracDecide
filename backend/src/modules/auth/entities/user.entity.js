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
exports.UserEntity = void 0;
var openapi = require("@nestjs/swagger");
var typeorm_1 = require("typeorm");
var Bcrypt = require("bcrypt");
var class_transformer_1 = require("class-transformer");
var entities_1 = require("@core/entities");
var role_entity_1 = require("./role.entity");
var UserEntity = /** @class */ (function () {
    function UserEntity() {
    }
    UserEntity.prototype.hashPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!this.password) {
                            return [2 /*return*/];
                        }
                        _a = this;
                        return [4 /*yield*/, Bcrypt.hash(this.password, 10)];
                    case 1:
                        _a.password = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UserEntity.prototype.checkBirthdate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (!this.birthdate) {
                    return [2 /*return*/];
                }
                return [2 /*return*/];
            });
        });
    };
    UserEntity._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return String; } }, createdAt: { required: true, type: function () { return Date; } }, updatedAt: { required: true, type: function () { return Date; } }, deletedAt: { required: true, type: function () { return Date; } }, roles: { required: true, type: function () { return [require("./role.entity").RoleEntity]; } }, bloodType: { required: true, type: function () { return Object; } }, ethnicOrigin: { required: true, type: function () { return Object; } }, identificationType: { required: true, type: function () { return Object; } }, gender: { required: true, type: function () { return Object; } }, maritalStatus: { required: true, type: function () { return Object; } }, sex: { required: true, type: function () { return Object; } }, activatedAt: { required: true, type: function () { return Date; } }, birthdate: { required: true, type: function () { return Date; } }, email: { required: true, type: function () { return String; } }, emailVerifiedAt: { required: true, type: function () { return Date; } }, identification: { required: true, type: function () { return String; } }, lastname: { required: true, type: function () { return String; } }, password: { required: true, type: function () { return String; } }, passwordChanged: { required: true, type: function () { return Boolean; } }, personalEmail: { required: true, type: function () { return String; } }, phone: { required: true, type: function () { return String; } }, maxAttempts: { required: true, type: function () { return Number; } }, name: { required: true, type: function () { return String; } }, suspendedAt: { required: true, type: function () { return Date; } }, username: { required: true, type: function () { return String; } } };
    };
    __decorate([
        (0, typeorm_1.PrimaryGeneratedColumn)('uuid')
    ], UserEntity.prototype, "id");
    __decorate([
        (0, typeorm_1.CreateDateColumn)({
            name: 'created_at',
            type: 'timestamptz',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], UserEntity.prototype, "createdAt");
    __decorate([
        (0, typeorm_1.UpdateDateColumn)({
            name: 'updated_at',
            type: 'timestamptz',
            "default": function () { return 'CURRENT_TIMESTAMP'; }
        })
    ], UserEntity.prototype, "updatedAt");
    __decorate([
        (0, typeorm_1.DeleteDateColumn)({
            name: 'deleted_at',
            type: 'timestamptz',
            nullable: true
        })
    ], UserEntity.prototype, "deletedAt");
    __decorate([
        (0, typeorm_1.ManyToMany)(function () { return role_entity_1.RoleEntity; }, function (role) { return role.users; }, { eager: true })
    ], UserEntity.prototype, "roles");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return entities_1.CatalogueEntity; }, { nullable: true }),
        (0, typeorm_1.JoinColumn)({ name: 'blood_type_id' })
    ], UserEntity.prototype, "bloodType");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return entities_1.CatalogueEntity; }, { nullable: true }),
        (0, typeorm_1.JoinColumn)({ name: 'ethnic_origin_id' })
    ], UserEntity.prototype, "ethnicOrigin");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return entities_1.CatalogueEntity; }, { nullable: true }),
        (0, typeorm_1.JoinColumn)({ name: 'identification_type_id' })
    ], UserEntity.prototype, "identificationType");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return entities_1.CatalogueEntity; }, { nullable: true }),
        (0, typeorm_1.JoinColumn)({ name: 'gender_id' })
    ], UserEntity.prototype, "gender");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return entities_1.CatalogueEntity; }, { nullable: true }),
        (0, typeorm_1.JoinColumn)({ name: 'marital_status_id' })
    ], UserEntity.prototype, "maritalStatus");
    __decorate([
        (0, typeorm_1.ManyToOne)(function () { return entities_1.CatalogueEntity; }, { nullable: true }),
        (0, typeorm_1.JoinColumn)({ name: 'sex_id' })
    ], UserEntity.prototype, "sex");
    __decorate([
        (0, typeorm_1.Column)('timestamptz', {
            name: 'activated_at',
            nullable: true,
            comment: 'Fecha de ultimo login'
        })
    ], UserEntity.prototype, "activatedAt");
    __decorate([
        (0, typeorm_1.Column)('date', {
            name: 'birthdate',
            nullable: true,
            comment: 'Fecha de nacimiento'
        })
    ], UserEntity.prototype, "birthdate");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'email',
            length: 150,
            unique: true,
            comment: 'Correo Electronico'
        })
    ], UserEntity.prototype, "email");
    __decorate([
        (0, typeorm_1.Column)('timestamp', {
            name: 'email_verified_at',
            nullable: true,
            comment: 'Verificacion de correo'
        })
    ], UserEntity.prototype, "emailVerifiedAt");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'identification',
            length: 255,
            unique: true,
            nullable: true,
            comment: 'Numero de documento puede ser la cedula'
        })
    ], UserEntity.prototype, "identification");
    __decorate([
        (0, typeorm_1.Column)('varchar', { name: 'lastname', length: 255, comment: 'Apellidos' })
    ], UserEntity.prototype, "lastname");
    __decorate([
        (0, class_transformer_1.Exclude)(),
        (0, typeorm_1.Column)('varchar', {
            name: 'password',
            length: 100,
            comment: 'Contraseña'
        })
    ], UserEntity.prototype, "password");
    __decorate([
        (0, typeorm_1.Column)('boolean', {
            name: 'password_changed',
            "default": false,
            comment: 'true: ya cambió la contraseña y False:no'
        })
    ], UserEntity.prototype, "passwordChanged");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'personal_email',
            length: 150,
            nullable: true,
            comment: 'Correo Electronico Personal'
        })
    ], UserEntity.prototype, "personalEmail");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'phone',
            length: 20,
            nullable: true,
            comment: 'Teléfono'
        })
    ], UserEntity.prototype, "phone");
    __decorate([
        (0, class_transformer_1.Exclude)(),
        (0, typeorm_1.Column)('int', {
            name: 'max_attempts',
            "default": 3,
            comment: 'Intentos máximos para errar la contraseña, si llega a cero el usuario se bloquea'
        })
    ], UserEntity.prototype, "maxAttempts");
    __decorate([
        (0, typeorm_1.Column)('varchar', { name: 'name', length: 255, comment: 'Nombres' })
    ], UserEntity.prototype, "name");
    __decorate([
        (0, typeorm_1.Column)('timestamp', {
            name: 'suspended_at',
            nullable: true,
            comment: 'Fecha de la ultima suspension del usuario'
        })
    ], UserEntity.prototype, "suspendedAt");
    __decorate([
        (0, typeorm_1.Column)('varchar', {
            name: 'username',
            length: 100,
            comment: 'Nombre de usuario para ingreso al sistema'
        })
    ], UserEntity.prototype, "username");
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)()
    ], UserEntity.prototype, "hashPassword");
    __decorate([
        (0, typeorm_1.BeforeInsert)(),
        (0, typeorm_1.BeforeUpdate)()
    ], UserEntity.prototype, "checkBirthdate");
    UserEntity = __decorate([
        (0, typeorm_1.Entity)('users', { schema: 'auth' })
    ], UserEntity);
    return UserEntity;
}());
exports.UserEntity = UserEntity;
