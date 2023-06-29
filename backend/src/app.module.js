"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var common_1 = require("@nestjs/common");
var axios_1 = require("@nestjs/axios");
var config_1 = require("@nestjs/config");
var Joi = require("joi");
var app_controller_1 = require("./app.controller");
var app_service_1 = require("./app.service");
var enviroments_1 = require("./enviroments");
var _config_1 = require("@config");
var modules_1 = require("@core/modules");
var modules_2 = require("@common/modules");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        (0, common_1.Module)({
            imports: [
                config_1.ConfigModule.forRoot({
                    envFilePath: enviroments_1.enviroments[process.env.NODE_ENV] || '.env',
                    isGlobal: true,
                    load: [_config_1.config],
                    validationSchema: Joi.object({
                        API_KEY: Joi.string().required(),
                        JWT_SECRET: Joi.string().required(),
                        DB_HOST: Joi.string().required(),
                        DB_NAME: Joi.string().required(),
                        DB_PASSWORD: Joi.string().required(),
                        DB_PORT: Joi.number().required(),
                        DB_USER: Joi.string().required()
                    })
                }),
                axios_1.HttpModule,
                modules_2.CommonModule,
                modules_1.CoreModule,
            ],
            controllers: [app_controller_1.AppController],
            providers: [app_service_1.AppService]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
