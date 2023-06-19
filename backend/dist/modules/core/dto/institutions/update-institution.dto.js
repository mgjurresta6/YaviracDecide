"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateInstitutionDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("..");
class UpdateInstitutionDto extends (0, swagger_1.PartialType)(dto_1.CreateInstitutionDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateInstitutionDto = UpdateInstitutionDto;
//# sourceMappingURL=update-institution.dto.js.map