"use strict";
exports.__esModule = true;
exports.PublicRoute = void 0;
var common_1 = require("@nestjs/common");
var constants_1 = require("@auth/constants");
var PublicRoute = function () { return (0, common_1.SetMetadata)(constants_1.IS_PUBLIC_ROUTE_KEY, true); };
exports.PublicRoute = PublicRoute;
