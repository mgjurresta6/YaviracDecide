"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const common_1 = require("@nestjs/common");
const jwt_1 = require("@nestjs/jwt");
const passport_1 = require("@nestjs/passport");
const _config_1 = require("../../config");
const controllers_1 = require("./controllers");
const services_1 = require("./services");
const strategies_1 = require("./strategies");
const providers_1 = require("./providers");
const _database_1 = require("../../database");
const menus_controller_1 = require("./controllers/menus.controller");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            _database_1.DatabaseModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                inject: [_config_1.config.KEY],
                useFactory: (configService) => {
                    return {
                        secret: configService.jwtSecret,
                        signOptions: {
                            expiresIn: '10d',
                        },
                    };
                },
            }),
        ],
        controllers: [
            controllers_1.AuthController,
            menus_controller_1.MenusController,
            controllers_1.RolesController,
            controllers_1.UsersController,
        ],
        providers: [
            ...providers_1.authProviders,
            strategies_1.JwtStrategy,
            services_1.AuthService,
            services_1.RolesService,
            services_1.UsersService,
            services_1.MenusService,
        ],
        exports: [services_1.UsersService, services_1.RolesService, services_1.MenusService],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=auth.module.js.map