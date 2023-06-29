"use strict";
exports.__esModule = true;
exports.Auth = void 0;
var common_1 = require("@nestjs/common");
var guards_1 = require("@auth/guards");
var swagger_1 = require("@nestjs/swagger");
function Auth() {
    var roles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        roles[_i] = arguments[_i];
    }
    return (0, common_1.applyDecorators)((0, common_1.UseGuards)(guards_1.JwtGuard), (0, swagger_1.ApiBearerAuth)());
}
exports.Auth = Auth;
