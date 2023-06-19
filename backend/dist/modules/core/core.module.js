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
const _database_1 = require("../../database");
const providers_1 = require("./providers");
let CoreModule = class CoreModule {
};
CoreModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [_database_1.DatabaseModule],
        controllers: [
            controllers_1.CareersController,
            controllers_1.CataloguesController,
            controllers_1.CurriculaController,
            controllers_1.InformationStudentsController,
            controllers_1.InformationTeachersController,
            controllers_1.InstitutionsController,
            controllers_1.StudentsController,
            controllers_1.SubjectsController,
        ],
        providers: [
            ...providers_1.coreProviders,
            services_1.CareersService,
            services_1.CataloguesService,
            services_1.CurriculaService,
            services_1.InformationStudentsService,
            services_1.InformationTeachersService,
            services_1.InstitutionsService,
            services_1.StudentsService,
            services_1.SubjectsService,
        ],
        exports: [
            ...providers_1.coreProviders,
            services_1.CareersService,
            services_1.CataloguesService,
            services_1.CurriculaService,
            services_1.InformationStudentsService,
            services_1.InformationTeachersService,
            services_1.InstitutionsService,
            services_1.StudentsService,
            services_1.SubjectsService,
        ],
    })
], CoreModule);
exports.CoreModule = CoreModule;
//# sourceMappingURL=core.module.js.map