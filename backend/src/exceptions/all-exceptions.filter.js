"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AllExceptionsFilter = void 0;
var common_1 = require("@nestjs/common");
var typeorm_1 = require("typeorm");
var AllExceptionsFilter = /** @class */ (function () {
    function AllExceptionsFilter() {
    }
    AllExceptionsFilter.prototype["catch"] = function (exception, host) {
        var ctx = host.switchToHttp();
        var response = ctx.getResponse();
        var request = ctx.getRequest();
        var errorResponseHttpModel = {
            error: 'Server Error',
            message: 'Server Error',
            statusCode: 500
        };
        var status = 500;
        if (exception instanceof common_1.HttpException) {
            var message = exception.getResponse().message;
            status = exception.getStatus();
            errorResponseHttpModel.error = 'Server Error';
            errorResponseHttpModel.message = message;
            if (exception instanceof common_1.BadRequestException) {
                errorResponseHttpModel.error = 'Bad Request';
                errorResponseHttpModel.message = message;
            }
            if (exception instanceof common_1.UnprocessableEntityException) {
                errorResponseHttpModel.error = 'Bad Request';
                errorResponseHttpModel.message = message;
            }
            if (exception instanceof common_1.UnauthorizedException) {
                errorResponseHttpModel.error = 'Unauthorized';
                errorResponseHttpModel.message =
                    message !== null && message !== void 0 ? message : 'You do not have authorization.';
            }
            if (exception instanceof common_1.NotFoundException) {
                errorResponseHttpModel.error = 'Route/Model not found';
                errorResponseHttpModel.message = message;
            }
            if (exception instanceof common_1.ForbiddenException) {
                errorResponseHttpModel.error = 'Forbidden';
                errorResponseHttpModel.message = message;
            }
            errorResponseHttpModel.statusCode = exception.getStatus();
        }
        if (exception instanceof typeorm_1.QueryFailedError) {
            status = 400;
            errorResponseHttpModel.statusCode = exception.driverError.code || 400;
            errorResponseHttpModel.error = exception.name || 'QueryFailedError';
            errorResponseHttpModel.message =
                exception.driverError.detail || 'Query Error';
        }
        response.status(status).json(errorResponseHttpModel);
    };
    AllExceptionsFilter = __decorate([
        (0, common_1.Catch)()
    ], AllExceptionsFilter);
    return AllExceptionsFilter;
}());
exports.AllExceptionsFilter = AllExceptionsFilter;
