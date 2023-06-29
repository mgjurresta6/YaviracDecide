"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
exports.CataloguesSeeder = void 0;
var common_1 = require("@nestjs/common");
var enums_1 = require("@shared/enums");
var CataloguesSeeder = /** @class */ (function () {
    function CataloguesSeeder(catalogueService) {
        this.catalogueService = catalogueService;
    }
    CataloguesSeeder.prototype.run = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.createAcademicPeriodCatalogues()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.createBloodTypeCatalogues()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.createCareerModalityCatalogues()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.createDisabilityTypeCatalogues()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.createEducationLevelCatalogues()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.createEthnicOriginCatalogues()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.createIdentificationTypeCatalogues()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.createInstitutionPracticesTypeCatalogues()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, this.createGenderCatalogues()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, this.createMaritalStatusCatalogues()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, this.createProjectScopeCatalogues()];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, this.createRegistrationTypeCatalogues()];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, this.createScholarshipReason1Catalogues()];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, this.createScholarshipReason2Catalogues()];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, this.createScholarshipReason3Catalogues()];
                    case 15:
                        _a.sent();
                        return [4 /*yield*/, this.createScholarshipReason4Catalogues()];
                    case 16:
                        _a.sent();
                        return [4 /*yield*/, this.createScholarshipReason5Catalogues()];
                    case 17:
                        _a.sent();
                        return [4 /*yield*/, this.createScholarshipReason6Catalogues()];
                    case 18:
                        _a.sent();
                        return [4 /*yield*/, this.createScholarshipTypeCatalogues()];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, this.createScholarshipFundingTypeCatalogues()];
                    case 20:
                        _a.sent();
                        return [4 /*yield*/, this.createSchoolDayCatalogues()];
                    case 21:
                        _a.sent();
                        return [4 /*yield*/, this.createSchoolTypeCatalogues()];
                    case 22:
                        _a.sent();
                        return [4 /*yield*/, this.createSexCatalogues()];
                    case 23:
                        _a.sent();
                        return [4 /*yield*/, this.createStudentIncomeForCatalogues()];
                    case 24:
                        _a.sent();
                        return [4 /*yield*/, this.createStudentOccupationCatalogues()];
                    case 25:
                        _a.sent();
                        return [4 /*yield*/, this.createYesNoCatalogues()];
                    case 26:
                        _a.sent();
                        return [4 /*yield*/, this.createYesNoNACatalogues()];
                    case 27:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createAcademicPeriodCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_1, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Periodo academico',
                            name: '1ro',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ACADEMIC_PERIOD
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Periodo academico',
                            name: '1do',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ACADEMIC_PERIOD
                        });
                        catalogues.push({
                            code: '3',
                            description: 'Periodo academico',
                            name: '3ro',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ACADEMIC_PERIOD
                        });
                        catalogues.push({
                            code: '4',
                            description: 'Periodo academico',
                            name: '4to',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ACADEMIC_PERIOD
                        });
                        catalogues.push({
                            code: '5',
                            description: 'Periodo academico',
                            name: '5to',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ACADEMIC_PERIOD
                        });
                        catalogues.push({
                            code: '6',
                            description: 'Periodo academico',
                            name: '6to',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ACADEMIC_PERIOD
                        });
                        _i = 0, catalogues_1 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_1.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_1[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createBloodTypeCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_2, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'tipo de sangre',
                            name: 'A+',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE
                        });
                        catalogues.push({
                            code: '2',
                            description: 'tipo de sangre',
                            name: 'A-',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE
                        });
                        catalogues.push({
                            code: '3',
                            description: 'tipo de sangre',
                            name: 'B+',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE
                        });
                        catalogues.push({
                            code: '4',
                            description: 'tipo de sangre',
                            name: 'B-',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE
                        });
                        catalogues.push({
                            code: '5',
                            description: 'tipo de sangre',
                            name: 'AB+',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE
                        });
                        catalogues.push({
                            code: '6',
                            description: 'tipo de sangre',
                            name: 'AB-',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE
                        });
                        catalogues.push({
                            code: '7',
                            description: 'tipo de sangre',
                            name: 'O+',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE
                        });
                        catalogues.push({
                            code: '8',
                            description: 'tipo de sangre',
                            name: 'O-',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE
                        });
                        _i = 0, catalogues_2 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_2.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_2[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createCareerModalityCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_3, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Modalidad de carrera',
                            name: 'Presencial',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.CAREER_MODALITY
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Modalidad de carrera',
                            name: 'Semi-Presencial',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.CAREER_MODALITY
                        });
                        catalogues.push({
                            code: '3',
                            description: 'Modalidad de carrera',
                            name: 'Disntacia',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.CAREER_MODALITY
                        });
                        catalogues.push({
                            code: '4',
                            description: 'Modalidad de carrera',
                            name: 'Dual',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.CAREER_MODALITY
                        });
                        catalogues.push({
                            code: '5',
                            description: 'Modalidad de carrera',
                            name: 'Línea',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.CAREER_MODALITY
                        });
                        catalogues.push({
                            code: '6',
                            description: 'Modalidad de carrera',
                            name: 'Híbrida',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.CAREER_MODALITY
                        });
                        _i = 0, catalogues_3 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_3.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_3[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createDisabilityTypeCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_4, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'tipo de discapacidad',
                            name: 'Intelectual',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE
                        });
                        catalogues.push({
                            code: '2',
                            description: 'tipo de discapacidad',
                            name: 'Física',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE
                        });
                        catalogues.push({
                            code: '3',
                            description: 'tipo de discapacidad',
                            name: 'Visual',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE
                        });
                        catalogues.push({
                            code: '4',
                            description: 'tipo de discapacidad',
                            name: 'Auditiva',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE
                        });
                        catalogues.push({
                            code: '5',
                            description: 'tipo de discapacidad',
                            name: 'Mental',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE
                        });
                        catalogues.push({
                            code: '6',
                            description: 'tipo de discapacidad',
                            name: 'Otra',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE
                        });
                        catalogues.push({
                            code: '7',
                            description: 'tipo de discapacidad',
                            name: 'No aplica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE
                        });
                        _i = 0, catalogues_4 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_4.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_4[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createEducationLevelCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_5, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Nivel de formación',
                            name: 'Centro de Alfabetización',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Nivel de formación',
                            name: 'Jardín de infantes',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL
                        });
                        catalogues.push({
                            code: '3',
                            description: 'Nivel de formación',
                            name: 'Primaria',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL
                        });
                        catalogues.push({
                            code: '4',
                            description: 'Nivel de formación',
                            name: 'Educación Básica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL
                        });
                        catalogues.push({
                            code: '5',
                            description: 'Nivel de formación',
                            name: 'Secundaria',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL
                        });
                        catalogues.push({
                            code: '6',
                            description: 'Nivel de formación',
                            name: 'Educación Media',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL
                        });
                        catalogues.push({
                            code: '7',
                            description: 'Nivel de formación',
                            name: 'Superior no Universitaria',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL
                        });
                        catalogues.push({
                            code: '8',
                            description: 'Nivel de formación',
                            name: 'Superior Universitaria',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL
                        });
                        catalogues.push({
                            code: '9',
                            description: 'Nivel de formación',
                            name: 'Posgrado',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL
                        });
                        catalogues.push({
                            code: '10',
                            description: 'Nivel de formación',
                            name: 'No aplica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL
                        });
                        _i = 0, catalogues_5 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_5.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_5[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createEthnicOriginCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_6, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'etnia',
                            name: 'Indígena',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN
                        });
                        catalogues.push({
                            code: '2',
                            description: 'tipo de sangre',
                            name: 'Afroecuatoriano',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN
                        });
                        catalogues.push({
                            code: '3',
                            description: 'tipo de sangre',
                            name: 'Negro',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN
                        });
                        catalogues.push({
                            code: '4',
                            description: 'tipo de sangre',
                            name: 'Mulato',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN
                        });
                        catalogues.push({
                            code: '5',
                            description: 'tipo de sangre',
                            name: 'Montuvio',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN
                        });
                        catalogues.push({
                            code: '6',
                            description: 'tipo de sangre',
                            name: 'Mestizo',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN
                        });
                        catalogues.push({
                            code: '7',
                            description: 'tipo de sangre',
                            name: 'Blanco',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN
                        });
                        catalogues.push({
                            code: '8',
                            description: 'tipo de sangre',
                            name: 'Otro',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN
                        });
                        catalogues.push({
                            code: '9',
                            description: 'tipo de sangre',
                            name: 'No registra',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN
                        });
                        _i = 0, catalogues_6 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_6.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_6[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createIdentificationTypeCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_7, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'tipo de identificacion',
                            name: 'Cédula',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.IDENTIFICATION_TYPE
                        });
                        catalogues.push({
                            code: '2',
                            description: 'tipo de identificacion',
                            name: 'Pasaporte',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.IDENTIFICATION_TYPE
                        });
                        _i = 0, catalogues_7 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_7.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_7[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createInstitutionPracticesTypeCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_8, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'tipo de institucion practicas',
                            name: 'Pública',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.INSTITUTION_PRACTICES_TYPE
                        });
                        catalogues.push({
                            code: '2',
                            description: 'tipo de institucion practicas',
                            name: 'Privada',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.INSTITUTION_PRACTICES_TYPE
                        });
                        catalogues.push({
                            code: '3',
                            description: 'tipo de institucion practicas',
                            name: 'ONG',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.INSTITUTION_PRACTICES_TYPE
                        });
                        catalogues.push({
                            code: '4',
                            description: 'tipo de institucion practicas',
                            name: 'Otro',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.INSTITUTION_PRACTICES_TYPE
                        });
                        catalogues.push({
                            code: '5',
                            description: 'tipo de institucion practicas',
                            name: 'No aplica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.INSTITUTION_PRACTICES_TYPE
                        });
                        _i = 0, catalogues_8 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_8.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_8[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createGenderCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_9, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'genero',
                            name: 'Masculino',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.GENDER
                        });
                        catalogues.push({
                            code: '2',
                            description: 'tipo de identificacion',
                            name: 'Femenino',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.GENDER
                        });
                        _i = 0, catalogues_9 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_9.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_9[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createMaritalStatusCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_10, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'estado civil',
                            name: 'Soltero/a',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS
                        });
                        catalogues.push({
                            code: '2',
                            description: 'estado civil',
                            name: 'Casado/a',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS
                        });
                        catalogues.push({
                            code: '3',
                            description: 'estado civil',
                            name: 'Divorciado/a',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS
                        });
                        catalogues.push({
                            code: '4',
                            description: 'estado civil',
                            name: 'Unión libre',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS
                        });
                        catalogues.push({
                            code: '5',
                            description: 'estado civil',
                            name: 'Viudo/a',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS
                        });
                        _i = 0, catalogues_10 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_10.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_10[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createProjectScopeCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_11, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Alcance del proyecto de vinculacion',
                            name: 'Nacional',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.PROJECT_SCOPE
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Alcance del proyecto de vinculacion',
                            name: 'Provincial',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.PROJECT_SCOPE
                        });
                        catalogues.push({
                            code: '3',
                            description: 'Alcance del proyecto de vinculacion',
                            name: 'Cantonal',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.PROJECT_SCOPE
                        });
                        catalogues.push({
                            code: '4',
                            description: 'Alcance del proyecto de vinculacion',
                            name: 'Parrolquial',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.PROJECT_SCOPE
                        });
                        catalogues.push({
                            code: '5',
                            description: 'Alcance del proyecto de vinculacion',
                            name: 'No aplica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.PROJECT_SCOPE
                        });
                        _i = 0, catalogues_11 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_11.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_11[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createRegistrationTypeCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_12, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Tipo de matricula',
                            name: 'Ordinaria',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.REGISTRATION_TYPE
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Tipo de matricula',
                            name: 'Extraordinaria',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.REGISTRATION_TYPE
                        });
                        catalogues.push({
                            code: '3',
                            description: 'Tipo de matricula',
                            name: 'Especial',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.REGISTRATION_TYPE
                        });
                        _i = 0, catalogues_12 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_12.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_12[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createScholarshipReason1Catalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_13, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Primera razón de la beca',
                            name: 'Socioeconómica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_1
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Primera razón de la beca',
                            name: 'No aplica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_1
                        });
                        _i = 0, catalogues_13 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_13.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_13[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createScholarshipReason2Catalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_14, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Segunda razón de la beca',
                            name: 'Excelencia Académica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_2
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Segunda razón de la beca',
                            name: 'No aplica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_2
                        });
                        _i = 0, catalogues_14 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_14.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_14[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createScholarshipReason3Catalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_15, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Tercera razón de la beca',
                            name: 'Deportista',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_3
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Tercera razón de la beca',
                            name: 'No aplica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_3
                        });
                        _i = 0, catalogues_15 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_15.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_15[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createScholarshipReason4Catalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_16, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Cuarta razón de la beca',
                            name: 'Pueblos y Nacionalidades',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_4
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Cuarta razón de la beca',
                            name: 'No aplica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_4
                        });
                        _i = 0, catalogues_16 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_16.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_16[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createScholarshipReason5Catalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_17, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Quinta razón de la beca',
                            name: 'Discapacidad',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_5
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Quinta razón de la beca',
                            name: 'No aplica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_5
                        });
                        _i = 0, catalogues_17 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_17.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_17[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createScholarshipReason6Catalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_18, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Sexta razón de la beca',
                            name: 'Otra',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_6
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Sexta razón de la beca',
                            name: 'No aplica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_6
                        });
                        _i = 0, catalogues_18 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_18.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_18[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createScholarshipTypeCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_19, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Tipo de beca',
                            name: 'Total',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_TYPE
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Tipo de beca',
                            name: 'Parcial',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_TYPE
                        });
                        catalogues.push({
                            code: '3',
                            description: 'Tipo de beca',
                            name: 'No aplica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_TYPE
                        });
                        _i = 0, catalogues_19 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_19.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_19[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createScholarshipFundingTypeCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_20, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Tipo de financiamento de beca',
                            name: 'Fondos propios',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_FUNDING_TYPE
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Tipo de financiamento de beca',
                            name: 'Transferencia del Estado',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_FUNDING_TYPE
                        });
                        catalogues.push({
                            code: '3',
                            description: 'Tipo de financiamento de beca',
                            name: 'Donaciones',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_FUNDING_TYPE
                        });
                        catalogues.push({
                            code: '4',
                            description: 'Tipo de financiamento de beca',
                            name: 'No aplica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_FUNDING_TYPE
                        });
                        _i = 0, catalogues_20 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_20.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_20[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createSchoolDayCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_21, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Jornada',
                            name: 'Matutina',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOOL_DAY
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Jornada',
                            name: 'Vespertina',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOOL_DAY
                        });
                        catalogues.push({
                            code: '3',
                            description: 'Jornada',
                            name: 'Nocturna',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOOL_DAY
                        });
                        catalogues.push({
                            code: '4',
                            description: 'Jornada',
                            name: 'Intensiva',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOOL_DAY
                        });
                        _i = 0, catalogues_21 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_21.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_21[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createSchoolTypeCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_22, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Tipo de colegio',
                            name: 'Fiscal',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOOL_TYPE
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Tipo de colegio',
                            name: 'Fiscomisional',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOOL_TYPE
                        });
                        catalogues.push({
                            code: '3',
                            description: 'Tipo de colegio',
                            name: 'Particular',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOOL_TYPE
                        });
                        catalogues.push({
                            code: '4',
                            description: 'Tipo de colegio',
                            name: 'Minicipal',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOOL_TYPE
                        });
                        catalogues.push({
                            code: '5',
                            description: 'Tipo de colegio',
                            name: 'Extranjero',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOOL_TYPE
                        });
                        catalogues.push({
                            code: '6',
                            description: 'Tipo de colegio',
                            name: 'No registra',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SCHOOL_TYPE
                        });
                        _i = 0, catalogues_22 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_22.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_22[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createSexCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_23, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'sexo',
                            name: 'Hombre',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SEX
                        });
                        catalogues.push({
                            code: '2',
                            description: 'sexo',
                            name: 'Mujer',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.SEX
                        });
                        _i = 0, catalogues_23 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_23.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_23[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createStudentIncomeForCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_24, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Para que emplea sus ingresos',
                            name: 'Financiar sus estudios',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.STUDENT_INCOME_FOR
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Para que emplea sus ingresos',
                            name: 'Para mantener a su hogar',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.STUDENT_INCOME_FOR
                        });
                        catalogues.push({
                            code: '3',
                            description: 'Para que emplea sus ingresos',
                            name: 'Gastos personales',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.STUDENT_INCOME_FOR
                        });
                        catalogues.push({
                            code: '4',
                            description: 'Para que emplea sus ingresos',
                            name: 'No aplica',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.STUDENT_INCOME_FOR
                        });
                        _i = 0, catalogues_24 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_24.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_24[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createStudentOccupationCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_25, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Ocupacion del estudiante',
                            name: 'Solo estudia',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.STUDENT_OCCUPATION
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Ocupacion del estudiante',
                            name: 'Trabaja y estudia',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.STUDENT_OCCUPATION
                        });
                        _i = 0, catalogues_25 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_25.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_25[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createYesNoCatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_26, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Si o No',
                            name: 'Si',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.YES_NO
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Si o No',
                            name: 'No',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.YES_NO
                        });
                        _i = 0, catalogues_26 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_26.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_26[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder.prototype.createYesNoNACatalogues = function () {
        return __awaiter(this, void 0, void 0, function () {
            var catalogues, _i, catalogues_27, catalogue;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        catalogues = [];
                        catalogues.push({
                            code: '1',
                            description: 'Si, No y No aplica',
                            name: 'Si',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.YES_NO_NA
                        });
                        catalogues.push({
                            code: '2',
                            description: 'Si, No y No aplica',
                            name: 'No',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.YES_NO_NA
                        });
                        catalogues.push({
                            code: '3',
                            description: 'Si, No y No aplica',
                            name: 'No apliaca',
                            state: enums_1.CatalogueStateEnum.ACTIVE,
                            type: enums_1.CatalogueTypeEnum.YES_NO_NA
                        });
                        _i = 0, catalogues_27 = catalogues;
                        _a.label = 1;
                    case 1:
                        if (!(_i < catalogues_27.length)) return [3 /*break*/, 4];
                        catalogue = catalogues_27[_i];
                        return [4 /*yield*/, this.catalogueService.create(catalogue)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    CataloguesSeeder = __decorate([
        (0, common_1.Injectable)()
    ], CataloguesSeeder);
    return CataloguesSeeder;
}());
exports.CataloguesSeeder = CataloguesSeeder;
