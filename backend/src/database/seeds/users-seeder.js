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
exports.UsersSeeder = void 0;
var common_1 = require("@nestjs/common");
var enums_1 = require("@auth/enums");
var UsersSeeder = /** @class */ (function () {
    function UsersSeeder(rolesService, usersService) {
        this.rolesService = rolesService;
        this.usersService = usersService;
    }
    UsersSeeder.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createUsers()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    UsersSeeder.prototype.createUsers = function () {
        return __awaiter(this, void 0, void 0, function () {
            var users, roles, adminRole, teacherRole, coordinatorAdministrativeRole, coordinatorCareerRole, rectorRole, _i, users_1, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        users = [];
                        return [4 /*yield*/, this.rolesService.findAll()];
                    case 1:
                        roles = (_a.sent()).data;
                        adminRole = roles.find(function (role) { return role.code === enums_1.RoleEnum.ADMIN; });
                        teacherRole = roles.find(function (role) { return role.code === enums_1.RoleEnum.TEACHER; });
                        coordinatorAdministrativeRole = roles.find(function (role) { return role.code === enums_1.RoleEnum.COORDINATOR_ADMINISTRATIVE; });
                        coordinatorCareerRole = roles.find(function (role) { return role.code === enums_1.RoleEnum.COORDINATOR_CAREER; });
                        rectorRole = roles.find(function (role) { return role.code === enums_1.RoleEnum.RECTOR; });
                        users.push({
                            email: 'admin@gmail.com',
                            lastname: 'Perez',
                            name: 'Admin',
                            password: '12345678',
                            passwordChanged: false,
                            roles: [adminRole],
                            username: 'admin'
                        }, {
                            email: 'teacher@gmail.com',
                            lastname: 'Perez',
                            name: 'Teacher',
                            password: '12345678',
                            passwordChanged: false,
                            roles: [teacherRole],
                            username: 'teacher'
                        }, {
                            email: 'coordinator_administrative@gmail.com',
                            lastname: 'Perez',
                            name: 'Coordinator Administrative',
                            password: '12345678',
                            passwordChanged: false,
                            roles: [coordinatorAdministrativeRole],
                            username: 'coordinator_administrative'
                        }, {
                            email: 'coordinator_career@gmail.com',
                            lastname: 'Perez',
                            name: 'Coordinator Career',
                            password: '12345678',
                            passwordChanged: false,
                            roles: [coordinatorCareerRole],
                            username: 'coordinator_career'
                        }, {
                            email: 'rector@gmail.com',
                            lastname: 'Perez',
                            name: 'Rector',
                            password: '12345678',
                            passwordChanged: false,
                            roles: [rectorRole],
                            username: 'rector'
                        });
                        _i = 0, users_1 = users;
                        _a.label = 2;
                    case 2:
                        if (!(_i < users_1.length)) return [3 /*break*/, 5];
                        user = users_1[_i];
                        return [4 /*yield*/, this.usersService.create(user)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 2];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    UsersSeeder = __decorate([
        (0, common_1.Injectable)()
    ], UsersSeeder);
    return UsersSeeder;
}());
exports.UsersSeeder = UsersSeeder;
