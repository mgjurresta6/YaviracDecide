"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReadMenuDto = void 0;
var openapi = require("@nestjs/swagger");
var class_transformer_1 = require("class-transformer");
var dto_1 = require("@auth/dto");
var ReadMenuDto = /** @class */ (function (_super) {
    __extends(ReadMenuDto, _super);
    function ReadMenuDto() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ReadMenuDto._OPENAPI_METADATA_FACTORY = function () {
        return { id: { required: true, type: function () { return Object; } }, icon: { required: true, type: function () { return Object; } }, isVisible: { required: true, type: function () { return Object; } }, name: { required: true, type: function () { return Object; } }, routerLink: { required: true, type: function () { return Object; } }, type: { required: true, type: function () { return Object; } } };
    };
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadMenuDto.prototype, "id");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadMenuDto.prototype, "icon");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadMenuDto.prototype, "isVisible");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadMenuDto.prototype, "name");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadMenuDto.prototype, "routerLink");
    __decorate([
        (0, class_transformer_1.Expose)()
    ], ReadMenuDto.prototype, "type");
    ReadMenuDto = __decorate([
        (0, class_transformer_1.Exclude)()
    ], ReadMenuDto);
    return ReadMenuDto;
}(dto_1.BaseMenuDto));
exports.ReadMenuDto = ReadMenuDto;
