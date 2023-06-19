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
exports.RolesSeeder = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../../modules/auth/services");
let RolesSeeder = class RolesSeeder {
    constructor(rolesService) {
        this.rolesService = rolesService;
    }
    async run() {
        await this.createRoles();
    }
    async createRoles() {
        const roles = [];
        roles.push({
            code: 'admin',
            name: 'Administrador',
        }, {
            code: 'teacher',
            name: 'Docente',
        }, {
            code: 'coordinator_administrative',
            name: 'Coordinador Administrativo',
        }, {
            code: 'coordinator_career',
            name: 'Coordinador Carrera',
        }, {
            code: 'rector',
            name: 'Rector',
        });
        for (const role of roles) {
            await this.rolesService.create(role);
        }
    }
};
RolesSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [services_1.RolesService])
], RolesSeeder);
exports.RolesSeeder = RolesSeeder;
//# sourceMappingURL=roles-seeder.js.map