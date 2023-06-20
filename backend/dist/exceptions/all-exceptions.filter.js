"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AllExceptionsFilter = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
let AllExceptionsFilter = class AllExceptionsFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const request = ctx.getRequest();
        const errorResponseHttpModel = {
            error: 'Server Error',
            message: 'Server Error',
            statusCode: 500,
        };
        let status = 500;
        if (exception instanceof common_1.HttpException) {
            const { message } = exception.getResponse();
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
    }
};
AllExceptionsFilter = __decorate([
    (0, common_1.Catch)()
], AllExceptionsFilter);
exports.AllExceptionsFilter = AllExceptionsFilter;
//# sourceMappingURL=all-exceptions.filter.js.map