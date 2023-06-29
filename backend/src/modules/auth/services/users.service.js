"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
exports.__esModule = true;
exports.UsersService = void 0;
var common_1 = require("@nestjs/common");
var class_transformer_1 = require("class-transformer");
var typeorm_1 = require("typeorm");
var dto_1 = require("@auth/dto");
var dto_2 = require("@core/dto");
var enums_1 = require("@shared/enums");
var constants_1 = require("@auth/constants");
var UsersService = /** @class */ (function () {
    function UsersService(userRepository) {
        this.userRepository = userRepository;
    }
    UsersService.prototype.create = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var newUser, userCreated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        newUser = this.userRepository.create(payload);
                        return [4 /*yield*/, this.userRepository.save(newUser)];
                    case 1:
                        userCreated = _a.sent();
                        return [2 /*return*/, { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, userCreated) }];
                }
            });
        });
    };
    UsersService.prototype.catalogue = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findAndCount({ take: 1000 })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: response[0],
                                pagination: { totalItems: response[1], limit: 10 }
                            }];
                }
            });
        });
    };
    UsersService.prototype.findAll = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!((params === null || params === void 0 ? void 0 : params.limit) > 0 && (params === null || params === void 0 ? void 0 : params.page) >= 0)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.paginateAndFilter(params)];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        //Other filters
                        if (params.birthdate) {
                            return [2 /*return*/, this.filterByBirthdate(params.birthdate)];
                        }
                        return [4 /*yield*/, this.userRepository.findAndCount({
                                order: { updatedAt: 'DESC' }
                            })];
                    case 3:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, response[0]),
                                pagination: { totalItems: response[1], limit: 10 }
                            }];
                }
            });
        });
    };
    UsersService.prototype.findOne = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOne({
                            where: { id: id },
                            select: { password: false }
                        })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.NotFoundException('User not found');
                        }
                        return [2 /*return*/, { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, user) }];
                }
            });
        });
    };
    UsersService.prototype.update = function (id, payload) {
        return __awaiter(this, void 0, void 0, function () {
            var user, userUpdated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.preload(__assign({ id: id }, payload))];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.NotFoundException('User not found');
                        }
                        return [4 /*yield*/, this.userRepository.save(user)];
                    case 2:
                        userUpdated = _a.sent();
                        return [2 /*return*/, { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, userUpdated) }];
                }
            });
        });
    };
    UsersService.prototype.reactivate = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, userUpdated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne(id)];
                    case 1:
                        user = (_a.sent()).data;
                        if (!user) {
                            throw new common_1.NotFoundException('User not found');
                        }
                        user.suspendedAt = null;
                        user.maxAttempts = constants_1.MAX_ATTEMPTS;
                        return [4 /*yield*/, this.userRepository.save(user)];
                    case 2:
                        userUpdated = _a.sent();
                        return [2 /*return*/, { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, userUpdated) }];
                }
            });
        });
    };
    UsersService.prototype.remove = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, userDeleted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.findOneBy({ id: id })];
                    case 1:
                        user = _a.sent();
                        if (!user) {
                            throw new common_1.NotFoundException('User not found');
                        }
                        return [4 /*yield*/, this.userRepository.softRemove(user)];
                    case 2:
                        userDeleted = _a.sent();
                        return [2 /*return*/, { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, userDeleted) }];
                }
            });
        });
    };
    UsersService.prototype.removeAll = function (payload) {
        return __awaiter(this, void 0, void 0, function () {
            var usersDeleted;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.userRepository.softRemove(payload)];
                    case 1:
                        usersDeleted = _a.sent();
                        return [2 /*return*/, { data: usersDeleted }];
                }
            });
        });
    };
    UsersService.prototype.paginateAndFilter = function (params) {
        return __awaiter(this, void 0, void 0, function () {
            var where, page, search, limit, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        where = {};
                        page = params.page, search = params.search;
                        limit = params.limit;
                        if (search) {
                            search = search.trim();
                            page = 0;
                            where = [];
                            where.push({ identification: (0, typeorm_1.ILike)("%".concat(search, "%")) });
                            where.push({ lastname: (0, typeorm_1.ILike)("%".concat(search, "%")) });
                            where.push({ name: (0, typeorm_1.ILike)("%".concat(search, "%")) });
                            where.push({ username: (0, typeorm_1.ILike)("%".concat(search, "%")) });
                        }
                        return [4 /*yield*/, this.userRepository.findAndCount({
                                where: where,
                                take: limit,
                                skip: dto_2.PaginationDto.getOffset(limit, page),
                                order: {
                                    updatedAt: 'DESC'
                                }
                            })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, response[0]),
                                pagination: { limit: limit, totalItems: response[1] }
                            }];
                }
            });
        });
    };
    UsersService.prototype.filterByBirthdate = function (birthdate) {
        return __awaiter(this, void 0, void 0, function () {
            var where, response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        where = {};
                        if (birthdate) {
                            where.birthdate = (0, typeorm_1.LessThan)(birthdate);
                        }
                        return [4 /*yield*/, this.userRepository.findAndCount({ where: where })];
                    case 1:
                        response = _a.sent();
                        return [2 /*return*/, {
                                data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, response[0]),
                                pagination: { limit: 10, totalItems: response[1] }
                            }];
                }
            });
        });
    };
    UsersService.prototype.suspend = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var user, userUpdated;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.findOne(id)];
                    case 1:
                        user = (_a.sent()).data;
                        if (!user) {
                            throw new common_1.NotFoundException('User not found');
                        }
                        user.suspendedAt = new Date();
                        return [4 /*yield*/, this.userRepository.save(user)];
                    case 2:
                        userUpdated = _a.sent();
                        return [2 /*return*/, { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserDto, userUpdated) }];
                }
            });
        });
    };
    UsersService = __decorate([
        (0, common_1.Injectable)(),
        __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.USER_REPOSITORY))
    ], UsersService);
    return UsersService;
}());
exports.UsersService = UsersService;
