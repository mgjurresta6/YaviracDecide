"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const common_1 = require("@nestjs/common");
const database_providers_1 = require("./database.providers");
const database_seeder_1 = require("./seeds/database-seeder");
const catalogues_seeder_1 = require("./seeds/catalogues-seeder");
const users_seeder_1 = require("./seeds/users-seeder");
const roles_seeder_1 = require("./seeds/roles-seeder");
const menus_seeder_1 = require("./seeds/menus-seeder");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            ...database_providers_1.databaseProviders,
            database_seeder_1.DatabaseSeeder,
            catalogues_seeder_1.CataloguesSeeder,
            users_seeder_1.UsersSeeder,
            roles_seeder_1.RolesSeeder,
            menus_seeder_1.MenusSeeder,
        ],
        exports: [...database_providers_1.databaseProviders, database_seeder_1.DatabaseSeeder],
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=database.module.js.map