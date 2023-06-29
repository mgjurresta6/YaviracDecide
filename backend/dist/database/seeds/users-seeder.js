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
exports.UsersSeeder = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../../modules/auth/services");
const enums_1 = require("../../modules/auth/enums");
let UsersSeeder = class UsersSeeder {
    constructor(rolesService, usersService) {
        this.rolesService = rolesService;
        this.usersService = usersService;
    }
    async run() {
        await this.createUsers();
    }
    async createUsers() {
        const users = [];
        const roles = (await this.rolesService.findAll()).data;
        const adminRole = roles.find((role) => role.code === enums_1.RoleEnum.ADMIN);
        const teacherRole = roles.find((role) => role.code === enums_1.RoleEnum.TEACHER);
        const coordinatorAdministrativeRole = roles.find((role) => role.code === enums_1.RoleEnum.COORDINATOR_ADMINISTRATIVE);
        const coordinatorCareerRole = roles.find((role) => role.code === enums_1.RoleEnum.COORDINATOR_CAREER);
        const rectorRole = roles.find((role) => role.code === enums_1.RoleEnum.RECTOR);
        users.push({
            email: 'admin@gmail.com',
            lastname: 'Perez',
            name: 'Admin',
            password: '12345678',
            passwordChanged: false,
            roles: [adminRole],
            username: 'admin',
        }, {
            email: 'teacher@gmail.com',
            lastname: 'Perez',
            name: 'Teacher',
            password: '12345678',
            passwordChanged: false,
            roles: [teacherRole],
            username: 'teacher',
        }, {
            email: 'coordinator_administrative@gmail.com',
            lastname: 'Perez',
            name: 'Coordinator Administrative',
            password: '12345678',
            passwordChanged: false,
            roles: [coordinatorAdministrativeRole],
            username: 'coordinator_administrative',
        }, {
            email: 'coordinator_career@gmail.com',
            lastname: 'Perez',
            name: 'Coordinator Career',
            password: '12345678',
            passwordChanged: false,
            roles: [coordinatorCareerRole],
            username: 'coordinator_career',
        }, {
            email: 'rector@gmail.com',
            lastname: 'Perez',
            name: 'Rector',
            password: '12345678',
            passwordChanged: false,
            roles: [rectorRole],
            username: 'rector',
        });
        for (const user of users) {
            await this.usersService.create(user);
        }
    }
};
UsersSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.RolesService,
        services_1.UsersService])
], UsersSeeder);
exports.UsersSeeder = UsersSeeder;
//# sourceMappingURL=users-seeder.js.map