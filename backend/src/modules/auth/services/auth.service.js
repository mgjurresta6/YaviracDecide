"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
exports.__esModule = true;
exports.AuthService = void 0;
var common_1 = require("@nestjs/common");
var Bcrypt = require("bcrypt");
var class_transformer_1 = require("class-transformer");
var enums_1 = require("@shared/enums");
var dto_1 = require("@auth/dto");
var AuthService = /** @class */ (function () {
    function AuthService(repository, userService, jwtService) {
        this.repository = repository;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    AuthService.prototype.changePassword = function (id, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var user, isMatchPassword;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOneBy({ id: id })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.NotFoundException('User not found');
                        }
                        return [4 /*yield*/, this.checkPassword(payload.oldPassword, user)];
                    case 2:
                        isMatchPassword = _a.sent();
                        if (!isMatchPassword) {
                            throw new common_1.BadRequestException('The old password is not match.');
                        }
                        if (payload.confirmationPassword !== payload.newPassword) {
                            throw new common_1.BadRequestException('The passwords do not match.');
                        }
                        user.password = payload.newPassword;
                        return [4 /*yield*/, this.repository.save(user)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, { data: true }];
                }
            });
        });
    };
    AuthService.prototype.login = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var user, _a, password, roles, userRest, accessToken;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.findByUsername(payload.username)];
                    case 1:
                        user = _b.sent();
                        if (user && user.maxAttempts === 0)
                            throw new common_1.UnauthorizedException('User exceeded the maximum number of attempts allowed.');
                        if (user && user.suspendedAt)
                            throw new common_1.UnauthorizedException('User is suspended.');
                        _a = !user;
                        if (_a) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.checkPassword(payload.password, user)];
                    case 2:
                        _a = !(_b.sent());
                        _b.label = 3;
                    case 3:
                        if (_a) {
                            throw new common_1.UnauthorizedException('Wrong username and/or password.');
                        }
                        user.activatedAt = new Date();
                        password = user.password, roles = user.roles, userRest = __rest(user, ["password", "roles"]);
                        return [4 /*yield*/, this.repository.update(userRest.id, userRest)];
                    case 4:
                        _b.sent();
                        accessToken = this.generateJwt(user);
                        return [2 /*return*/, { data: { accessToken: accessToken, user: user } }];
                }
            });
        });
    };
    AuthService.prototype.findProfile = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: { id: id },
                            relations: {
                                bloodType: true,
                                ethnicOrigin: true,
                                identificationType: true,
                                gender: true,
                                maritalStatus: true,
                                sex: true
                            }
                        })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.NotFoundException('User not found');
                        }
                        return [2 /*return*/, { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadProfileDto, user) }];
                }
            });
        });
    };
    AuthService.prototype.findUserInformation = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOneBy({ id: id })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.NotFoundException('User not found');
                        }
                        return [2 /*return*/, { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserInformationDto, user) }];
                }
            });
        });
    };
    AuthService.prototype.updateUserInformation = function (id, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var user, userUpdated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userService.findOne(id)];
                    case 1:
                        user = (_a.sent()).data;
                        if (!user) {
                            throw new common_1.NotFoundException('User not found');
                        }
                        this.repository.merge(user, payload);
                        return [4 /*yield*/, this.repository.save(user)];
                    case 2:
                        userUpdated = _a.sent();
                        return [2 /*return*/, { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserInformationDto, userUpdated) }];
                }
            });
        });
    };
    AuthService.prototype.updateProfile = function (id, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var user, profileUpdated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOneBy({ id: id })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.NotFoundException('User not found');
                        }
                        this.repository.merge(user, payload);
                        return [4 /*yield*/, this.repository.save(user)];
                    case 2:
                        profileUpdated = _a.sent();
                        return [2 /*return*/, { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadProfileDto, profileUpdated) }];
                }
            });
        });
    };
    AuthService.prototype.refreshToken = function (user) {
        var accessToken = this.generateJwt(user);
        return { data: { accessToken: accessToken, user: user } };
    };
    AuthService.prototype.generateJwt = function (user) {
        var payload = { id: user.id, role: 'admin' };
        return this.jwtService.sign(payload);
    };
    AuthService.prototype.findByUsername = function (username) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.repository.findOne({
                            where: {
                                username: username
                            }
                        })];
                    case 1: return [2 /*return*/, (_a.sent())];
                }
            });
        });
    };
    AuthService.prototype.checkPassword = function (passwordCompare, user) {
        return __awaiter(this, void 0, void 0, function () {
            var password, userRest, isMatch;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        password = user.password, userRest = __rest(user, ["password"]);
                        isMatch = Bcrypt.compareSync(passwordCompare, password);
                        if (!isMatch) return [3 /*break*/, 2];
                        userRest.maxAttempts = 3;
                        return [4 /*yield*/, this.repository.save(userRest)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, user];
                    case 2:
                        userRest.maxAttempts =
                            userRest.maxAttempts > 0 ? userRest.maxAttempts - 1 : 0;
                        return [4 /*yield*/, this.repository.save(userRest)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/, null];
                }
            });
        });
    };
    AuthService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.USER_REPOSITORY))
    ], AuthService);
    return AuthService;
}());
exports.AuthService = AuthService;
