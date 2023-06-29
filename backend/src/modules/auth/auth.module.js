"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
exports.__esModule = true;
exports.AuthModule = void 0;
var common_1 = require("@nestjs/common");
var jwt_1 = require("@nestjs/jwt");
var passport_1 = require("@nestjs/passport");
var _config_1 = require("@config");
var controllers_1 = require("@auth/controllers");
var services_1 = require("@auth/services");
var strategies_1 = require("@auth/strategies");
var providers_1 = require("@auth/providers");
var _database_1 = require("@database");
var menus_controller_1 = require("./controllers/menus.controller");
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        (0, common_1.Global)(),
        (0, common_1.Module)({
            imports: [
                _database_1.DatabaseModule,
                passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
                jwt_1.JwtModule.registerAsync({
                    inject: [_config_1.config.KEY],
                    useFactory: function (configService) {
                        return {
                            secret: configService.jwtSecret,
                            signOptions: {
                                expiresIn: '10d'
                            }
                        };
                    }
                }),
            ],
            controllers: [
                controllers_1.AuthController,
                menus_controller_1.MenusController,
                controllers_1.RolesController,
                controllers_1.UsersController,
            ],
            providers: __spreadArray(__spreadArray([], providers_1.authProviders, true), [
                strategies_1.JwtStrategy,
                services_1.AuthService,
                services_1.RolesService,
                services_1.UsersService,
                services_1.MenusService,
            ], false),
            exports: [services_1.UsersService, services_1.RolesService, services_1.MenusService]
        })
    ], AuthModule);
    return AuthModule;
}());
exports.AuthModule = AuthModule;
