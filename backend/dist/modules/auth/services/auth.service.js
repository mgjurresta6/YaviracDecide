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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const Bcrypt = require("bcrypt");
const class_transformer_1 = require("class-transformer");
const typeorm_1 = require("typeorm");
const enums_1 = require("../../../shared/enums");
const dto_1 = require("../dto");
const services_1 = require("./");
let AuthService = class AuthService {
    constructor(repository, userService, jwtService) {
        this.repository = repository;
        this.userService = userService;
        this.jwtService = jwtService;
    }
    async changePassword(id, payload) {
        const user = await this.repository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        const isMatchPassword = await this.checkPassword(payload.oldPassword, user);
        if (!isMatchPassword) {
            throw new common_1.BadRequestException('The old password is not match.');
        }
        if (payload.confirmationPassword !== payload.newPassword) {
            throw new common_1.BadRequestException('The passwords do not match.');
        }
        user.password = payload.newPassword;
        await this.repository.save(user);
        return { data: true };
    }
    async login(payload) {
        const user = await this.findByUsername(payload.username);
        if (user && user.maxAttempts === 0)
            throw new common_1.UnauthorizedException('User exceeded the maximum number of attempts allowed.');
        if (user && user.suspendedAt)
            throw new common_1.UnauthorizedException('User is suspended.');
        if (!user || !(await this.checkPassword(payload.password, user))) {
            throw new common_1.UnauthorizedException('Wrong username and/or password.');
        }
        user.activatedAt = new Date();
        const { password, roles } = user, userRest = __rest(user, ["password", "roles"]);
        await this.repository.update(userRest.id, userRest);
        const accessToken = this.generateJwt(user);
        return { data: { accessToken, user } };
    }
    async findProfile(id) {
        const user = await this.repository.findOne({
            where: { id },
            relations: {
                bloodType: true,
                ethnicOrigin: true,
                identificationType: true,
                gender: true,
                maritalStatus: true,
                sex: true,
            },
        });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadProfileDto, user) };
    }
    async findUserInformation(id) {
        const user = await this.repository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        return { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserInformationDto, user) };
    }
    async updateUserInformation(id, payload) {
        const user = (await this.userService.findOne(id)).data;
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        this.repository.merge(user, payload);
        const userUpdated = await this.repository.save(user);
        return { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadUserInformationDto, userUpdated) };
    }
    async updateProfile(id, payload) {
        const user = await this.repository.findOneBy({ id });
        if (!user) {
            throw new common_1.NotFoundException('User not found');
        }
        this.repository.merge(user, payload);
        const profileUpdated = await this.repository.save(user);
        return { data: (0, class_transformer_1.plainToInstance)(dto_1.ReadProfileDto, profileUpdated) };
    }
    refreshToken(user) {
        const accessToken = this.generateJwt(user);
        return { data: { accessToken, user } };
    }
    generateJwt(user) {
        const payload = { id: user.id, role: 'admin' };
        return this.jwtService.sign(payload);
    }
    async findByUsername(username) {
        return (await this.repository.findOne({
            where: {
                username,
            },
        }));
    }
    async checkPassword(passwordCompare, user) {
        const { password } = user, userRest = __rest(user, ["password"]);
        const isMatch = Bcrypt.compareSync(passwordCompare, password);
        if (isMatch) {
            userRest.maxAttempts = 3;
            await this.repository.save(userRest);
            return user;
        }
        userRest.maxAttempts =
            userRest.maxAttempts > 0 ? userRest.maxAttempts - 1 : 0;
        await this.repository.save(userRest);
        return null;
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(enums_1.RepositoryEnum.USER_REPOSITORY)),
    __metadata("design:paramtypes", [typeorm_1.Repository,
        services_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map