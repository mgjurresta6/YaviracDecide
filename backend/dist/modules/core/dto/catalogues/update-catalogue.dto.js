"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateCatalogueDto = void 0;
const openapi = require("@nestjs/swagger");
const swagger_1 = require("@nestjs/swagger");
const dto_1 = require("..");
class UpdateCatalogueDto extends (0, swagger_1.PartialType)(dto_1.CreateCatalogueDto) {
    static _OPENAPI_METADATA_FACTORY() {
        return {};
    }
}
exports.UpdateCatalogueDto = UpdateCatalogueDto;
//# sourceMappingURL=update-catalogue.dto.js.map