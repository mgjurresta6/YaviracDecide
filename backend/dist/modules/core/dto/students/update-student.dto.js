"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateStudentDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("..");
class UpdateStudentDto extends (0, swagger_1.PartialType)(dto_1.CreateStudentDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateStudentDto = UpdateStudentDto;
//# sourceMappingURL=update-student.dto.js.map