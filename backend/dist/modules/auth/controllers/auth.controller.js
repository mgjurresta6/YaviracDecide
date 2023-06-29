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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const openapi = require("@nestjs/swagger");
const common_1 = require("@nestjs/common");
const swagger_1 = require("@nestjs/swagger");
const decorators_1 = require("../decorators");
const services_1 = require("../services");
const entities_1 = require("../entities");
const dto_1 = require("../dto");
let AuthController = class AuthController {
    constructor(authService) {
        this.authService = authService;
    }
    async login(payload) {
        const serviceResponse = await this.authService.login(payload);
        return {
            data: serviceResponse.data,
            message: 'Correct Access',
            title: 'Welcome',
        };
    }
    async changePassword(id, payload) {
        const serviceResponse = await this.authService.changePassword(id, payload);
        return {
            data: serviceResponse.data,
            message: 'The password was changed',
            title: 'Password Changed',
        };
    }
    async findProfile(user) {
        const serviceResponse = await this.authService.findProfile(user.id);
        return {
            data: serviceResponse.data,
            message: `profile`,
            title: `Success`,
        };
    }
    async findUserInformation(user) {
        const serviceResponse = await this.authService.findUserInformation(user.id);
        return {
            data: serviceResponse.data,
            message: 'The user information was updated',
            title: 'User Information Updated',
        };
    }
    async updateProfile(user, payload) {
        const serviceResponse = await this.authService.updateProfile(user.id, payload);
        return {
            data: serviceResponse.data,
            message: 'The profile was updated',
            title: 'Profile Updated',
        };
    }
    async updateUserInformation(id, payload) {
        const serviceResponse = await this.authService.updateUserInformation(id, payload);
        return {
            data: serviceResponse.data,
            message: 'The user information was updated',
            title: 'User Information Updated',
        };
    }
    refreshToken(user) {
        const serviceResponse = this.authService.refreshToken(user);
        return {
            data: serviceResponse.data,
            message: 'Correct Access',
            title: 'Refresh Token',
        };
    }
};
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Login' }),
    (0, decorators_1.PublicRoute)(),
    (0, common_1.Post)('login'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [dto_1.LoginDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Change Password' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Put)(':id/change-password'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.PasswordChangeDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "changePassword", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find Profile' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Get)('profile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserEntity]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "findProfile", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Find User Information' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Get)('user-information'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserEntity]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "findUserInformation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update Profile' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Put)('profile'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, decorators_1.User)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserEntity,
        dto_1.UpdateProfileDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateProfile", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update User Information' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Put)('user-information'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, decorators_1.User)('id', common_1.ParseUUIDPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, dto_1.UpdateUserInformationDto]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "updateUserInformation", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Refresh Token' }),
    (0, decorators_1.Auth)(),
    (0, common_1.Get)('refresh-token'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, decorators_1.User)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [entities_1.UserEntity]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "refreshToken", null);
AuthController = __decorate([
    (0, swagger_1.ApiTags)('Auth'),
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [services_1.AuthService])
], AuthController);
exports.AuthController = AuthController;
//# sourceMappingURL=auth.controller.js.map