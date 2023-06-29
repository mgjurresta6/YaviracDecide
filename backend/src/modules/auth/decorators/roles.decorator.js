"use strict";
exports.__esModule = true;
exports.Roles = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("@auth/constants");
var Roles = function () {
    var roles = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        roles[_i] = arguments[_i];
    }
    return (0, common_1.SetMetadata)(constants_1.ROLES_KEY, roles);
};
exports.Roles = Roles;
