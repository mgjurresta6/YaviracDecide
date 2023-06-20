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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenusSeeder = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("@auth/services");
const enums_1 = require("@auth/enums");
let MenusSeeder = class MenusSeeder {
    constructor(menusService) {
        this.menusService = menusService;
    }
    async run() {
        await this.createMenus();
    }
    async createMenus() {
        let menus = [];
        menus.push({
            code: 'profile',
            icon: 'pi pi-user',
            isVisible: true,
            label: 'Perfil',
            routerLink: '/profile',
            type: enums_1.MenuTypeEnum.LEFT_SIDE,
        }, {
            code: 'administrator',
            icon: 'pi pi-users',
            isVisible: true,
            label: 'Administrador',
            type: enums_1.MenuTypeEnum.LEFT_SIDE,
        });
        for (const menu of menus) {
            await this.menusService.create(menu);
        }
        menus = [];
        const menusAll = (await this.menusService.findAll()).data;
        const administratorMenu = menusAll.find((menu) => (menu.code = 'administrator'));
        menus.push({
            code: 'users',
            icon: 'pi pi-users',
            isVisible: true,
            label: 'Usuarios',
            routerLink: '/administration/users',
            type: enums_1.MenuTypeEnum.LEFT_SIDE,
            parent: administratorMenu,
        }, {
            code: 'menus',
            icon: 'pi pi-bars',
            isVisible: true,
            label: 'Menus',
            routerLink: '/administration/menus',
            type: enums_1.MenuTypeEnum.LEFT_SIDE,
            parent: administratorMenu,
        });
        for (const menu of menus) {
            await this.menusService.create(menu);
        }
    }
};
MenusSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof services_1.MenusService !== "undefined" && services_1.MenusService) === "function" ? _a : Object])
], MenusSeeder);
exports.MenusSeeder = MenusSeeder;
//# sourceMappingURL=menus-seeder.js.map