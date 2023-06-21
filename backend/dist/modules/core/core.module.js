"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CoreModule = void 0;
const common_1 = require("@nestjs/common");
const controllers_1 = require("./controllers");
const services_1 = require("./services");
const providers_1 = require("./providers");
const _database_1 = require("../../database");
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [_database_1.DatabaseModule],
        controllers: [
            controllers_1.ActividadesController,
            controllers_1.CarrerasController,
            controllers_1.ConfiguracionesController,
            controllers_1.CronogramasController,
            controllers_1.CursosController,
            controllers_1.DignidadesController,
            controllers_1.JornadasController,
            controllers_1.ListasController,
            controllers_1.ParalelosController,
            controllers_1.PeriodoLectivosController,
            controllers_1.ResultadosController,
            controllers_1.RolesController,
            controllers_1.tipoUsuariosController,
            controllers_1.UsuariosController,
            controllers_1.TipoListasController,
            controllers_1.VotosController
        ],
        providers: [
            ...providers_1.coreProviders,
            services_1.ActividadesService,
            services_1.CarrerasService,
            services_1.ConfiguracionesService,
            services_1.CronogramasService,
            services_1.CursosService,
            services_1.DignidadesService,
            services_1.JornadasService,
            services_1.ListasService,
            services_1.ParalelosService,
            services_1.PeriodoLectivosService,
            services_1.ResultadosService,
            services_1.RolesService,
            services_1.TipoListasService,
            services_1.UsuariosService,
            services_1.TipoUsuariosService,
            services_1.VotosService,
            services_1.CataloguesService
        ],
        exports: [
            ...providers_1.coreProviders,
            services_1.CarrerasService,
            services_1.ConfiguracionesService,
            services_1.CronogramasService,
            services_1.CursosService,
            services_1.DignidadesService,
            services_1.JornadasService,
            services_1.ListasService,
            services_1.ParalelosService,
            services_1.PeriodoLectivosService,
            services_1.ResultadosService,
            services_1.RolesService,
            services_1.TipoListasService,
            services_1.UsuariosService,
            services_1.TipoUsuariosService,
            services_1.VotosService,
            services_1.CataloguesService
        ],
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map