"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CataloguesSeeder = void 0;
const common_1 = require("@nestjs/common");
const services_1 = require("../../modules/core/services");
const enums_1 = require("../../shared/enums");
let CataloguesSeeder = class CataloguesSeeder {
    constructor(catalogueService) {
        this.catalogueService = catalogueService;
    }
    async run() {
        await this.createAcademicPeriodCatalogues();
        await this.createBloodTypeCatalogues();
        await this.createCareerModalityCatalogues();
        await this.createDisabilityTypeCatalogues();
        await this.createEducationLevelCatalogues();
        await this.createEthnicOriginCatalogues();
        await this.createIdentificationTypeCatalogues();
        await this.createInstitutionPracticesTypeCatalogues();
        await this.createGenderCatalogues();
        await this.createMaritalStatusCatalogues();
        await this.createProjectScopeCatalogues();
        await this.createRegistrationTypeCatalogues();
        await this.createScholarshipReason1Catalogues();
        await this.createScholarshipReason2Catalogues();
        await this.createScholarshipReason3Catalogues();
        await this.createScholarshipReason4Catalogues();
        await this.createScholarshipReason5Catalogues();
        await this.createScholarshipReason6Catalogues();
        await this.createScholarshipTypeCatalogues();
        await this.createScholarshipFundingTypeCatalogues();
        await this.createSchoolDayCatalogues();
        await this.createSchoolTypeCatalogues();
        await this.createSexCatalogues();
        await this.createStudentIncomeForCatalogues();
        await this.createStudentOccupationCatalogues();
        await this.createYesNoCatalogues();
        await this.createYesNoNACatalogues();
    }
    async createAcademicPeriodCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Periodo academico',
            name: '1ro',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ACADEMIC_PERIOD,
        });
        catalogues.push({
            code: '2',
            description: 'Periodo academico',
            name: '1do',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ACADEMIC_PERIOD,
        });
        catalogues.push({
            code: '3',
            description: 'Periodo academico',
            name: '3ro',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ACADEMIC_PERIOD,
        });
        catalogues.push({
            code: '4',
            description: 'Periodo academico',
            name: '4to',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ACADEMIC_PERIOD,
        });
        catalogues.push({
            code: '5',
            description: 'Periodo academico',
            name: '5to',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ACADEMIC_PERIOD,
        });
        catalogues.push({
            code: '6',
            description: 'Periodo academico',
            name: '6to',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ACADEMIC_PERIOD,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createBloodTypeCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'tipo de sangre',
            name: 'A+',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        });
        catalogues.push({
            code: '2',
            description: 'tipo de sangre',
            name: 'A-',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        });
        catalogues.push({
            code: '3',
            description: 'tipo de sangre',
            name: 'B+',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        });
        catalogues.push({
            code: '4',
            description: 'tipo de sangre',
            name: 'B-',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        });
        catalogues.push({
            code: '5',
            description: 'tipo de sangre',
            name: 'AB+',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        });
        catalogues.push({
            code: '6',
            description: 'tipo de sangre',
            name: 'AB-',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        });
        catalogues.push({
            code: '7',
            description: 'tipo de sangre',
            name: 'O+',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        });
        catalogues.push({
            code: '8',
            description: 'tipo de sangre',
            name: 'O-',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.BLOOD_TYPE,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createCareerModalityCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Modalidad de carrera',
            name: 'Presencial',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.CAREER_MODALITY,
        });
        catalogues.push({
            code: '2',
            description: 'Modalidad de carrera',
            name: 'Semi-Presencial',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.CAREER_MODALITY,
        });
        catalogues.push({
            code: '3',
            description: 'Modalidad de carrera',
            name: 'Disntacia',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.CAREER_MODALITY,
        });
        catalogues.push({
            code: '4',
            description: 'Modalidad de carrera',
            name: 'Dual',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.CAREER_MODALITY,
        });
        catalogues.push({
            code: '5',
            description: 'Modalidad de carrera',
            name: 'Línea',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.CAREER_MODALITY,
        });
        catalogues.push({
            code: '6',
            description: 'Modalidad de carrera',
            name: 'Híbrida',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.CAREER_MODALITY,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createDisabilityTypeCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'tipo de discapacidad',
            name: 'Intelectual',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE,
        });
        catalogues.push({
            code: '2',
            description: 'tipo de discapacidad',
            name: 'Física',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE,
        });
        catalogues.push({
            code: '3',
            description: 'tipo de discapacidad',
            name: 'Visual',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE,
        });
        catalogues.push({
            code: '4',
            description: 'tipo de discapacidad',
            name: 'Auditiva',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE,
        });
        catalogues.push({
            code: '5',
            description: 'tipo de discapacidad',
            name: 'Mental',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE,
        });
        catalogues.push({
            code: '6',
            description: 'tipo de discapacidad',
            name: 'Otra',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE,
        });
        catalogues.push({
            code: '7',
            description: 'tipo de discapacidad',
            name: 'No aplica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.DISABILITY_TYPE,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createEducationLevelCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Nivel de formación',
            name: 'Centro de Alfabetización',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL,
        });
        catalogues.push({
            code: '2',
            description: 'Nivel de formación',
            name: 'Jardín de infantes',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL,
        });
        catalogues.push({
            code: '3',
            description: 'Nivel de formación',
            name: 'Primaria',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL,
        });
        catalogues.push({
            code: '4',
            description: 'Nivel de formación',
            name: 'Educación Básica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL,
        });
        catalogues.push({
            code: '5',
            description: 'Nivel de formación',
            name: 'Secundaria',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL,
        });
        catalogues.push({
            code: '6',
            description: 'Nivel de formación',
            name: 'Educación Media',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL,
        });
        catalogues.push({
            code: '7',
            description: 'Nivel de formación',
            name: 'Superior no Universitaria',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL,
        });
        catalogues.push({
            code: '8',
            description: 'Nivel de formación',
            name: 'Superior Universitaria',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL,
        });
        catalogues.push({
            code: '9',
            description: 'Nivel de formación',
            name: 'Posgrado',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL,
        });
        catalogues.push({
            code: '10',
            description: 'Nivel de formación',
            name: 'No aplica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.EDUCATION_LEVEL,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createEthnicOriginCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'etnia',
            name: 'Indígena',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        });
        catalogues.push({
            code: '2',
            description: 'tipo de sangre',
            name: 'Afroecuatoriano',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        });
        catalogues.push({
            code: '3',
            description: 'tipo de sangre',
            name: 'Negro',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        });
        catalogues.push({
            code: '4',
            description: 'tipo de sangre',
            name: 'Mulato',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        });
        catalogues.push({
            code: '5',
            description: 'tipo de sangre',
            name: 'Montuvio',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        });
        catalogues.push({
            code: '6',
            description: 'tipo de sangre',
            name: 'Mestizo',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        });
        catalogues.push({
            code: '7',
            description: 'tipo de sangre',
            name: 'Blanco',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        });
        catalogues.push({
            code: '8',
            description: 'tipo de sangre',
            name: 'Otro',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        });
        catalogues.push({
            code: '9',
            description: 'tipo de sangre',
            name: 'No registra',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.ETHNIC_ORIGIN,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createIdentificationTypeCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'tipo de identificacion',
            name: 'Cédula',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.IDENTIFICATION_TYPE,
        });
        catalogues.push({
            code: '2',
            description: 'tipo de identificacion',
            name: 'Pasaporte',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.IDENTIFICATION_TYPE,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createInstitutionPracticesTypeCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'tipo de institucion practicas',
            name: 'Pública',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.INSTITUTION_PRACTICES_TYPE,
        });
        catalogues.push({
            code: '2',
            description: 'tipo de institucion practicas',
            name: 'Privada',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.INSTITUTION_PRACTICES_TYPE,
        });
        catalogues.push({
            code: '3',
            description: 'tipo de institucion practicas',
            name: 'ONG',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.INSTITUTION_PRACTICES_TYPE,
        });
        catalogues.push({
            code: '4',
            description: 'tipo de institucion practicas',
            name: 'Otro',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.INSTITUTION_PRACTICES_TYPE,
        });
        catalogues.push({
            code: '5',
            description: 'tipo de institucion practicas',
            name: 'No aplica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.INSTITUTION_PRACTICES_TYPE,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createGenderCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'genero',
            name: 'Masculino',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.GENDER,
        });
        catalogues.push({
            code: '2',
            description: 'tipo de identificacion',
            name: 'Femenino',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.GENDER,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createMaritalStatusCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'estado civil',
            name: 'Soltero/a',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS,
        });
        catalogues.push({
            code: '2',
            description: 'estado civil',
            name: 'Casado/a',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS,
        });
        catalogues.push({
            code: '3',
            description: 'estado civil',
            name: 'Divorciado/a',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS,
        });
        catalogues.push({
            code: '4',
            description: 'estado civil',
            name: 'Unión libre',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS,
        });
        catalogues.push({
            code: '5',
            description: 'estado civil',
            name: 'Viudo/a',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.MARITAL_STATUS,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createProjectScopeCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Alcance del proyecto de vinculacion',
            name: 'Nacional',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.PROJECT_SCOPE,
        });
        catalogues.push({
            code: '2',
            description: 'Alcance del proyecto de vinculacion',
            name: 'Provincial',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.PROJECT_SCOPE,
        });
        catalogues.push({
            code: '3',
            description: 'Alcance del proyecto de vinculacion',
            name: 'Cantonal',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.PROJECT_SCOPE,
        });
        catalogues.push({
            code: '4',
            description: 'Alcance del proyecto de vinculacion',
            name: 'Parrolquial',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.PROJECT_SCOPE,
        });
        catalogues.push({
            code: '5',
            description: 'Alcance del proyecto de vinculacion',
            name: 'No aplica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.PROJECT_SCOPE,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createRegistrationTypeCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Tipo de matricula',
            name: 'Ordinaria',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.REGISTRATION_TYPE,
        });
        catalogues.push({
            code: '2',
            description: 'Tipo de matricula',
            name: 'Extraordinaria',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.REGISTRATION_TYPE,
        });
        catalogues.push({
            code: '3',
            description: 'Tipo de matricula',
            name: 'Especial',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.REGISTRATION_TYPE,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createScholarshipReason1Catalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Primera razón de la beca',
            name: 'Socioeconómica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_1,
        });
        catalogues.push({
            code: '2',
            description: 'Primera razón de la beca',
            name: 'No aplica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_1,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createScholarshipReason2Catalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Segunda razón de la beca',
            name: 'Excelencia Académica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_2,
        });
        catalogues.push({
            code: '2',
            description: 'Segunda razón de la beca',
            name: 'No aplica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_2,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createScholarshipReason3Catalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Tercera razón de la beca',
            name: 'Deportista',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_3,
        });
        catalogues.push({
            code: '2',
            description: 'Tercera razón de la beca',
            name: 'No aplica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_3,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createScholarshipReason4Catalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Cuarta razón de la beca',
            name: 'Pueblos y Nacionalidades',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_4,
        });
        catalogues.push({
            code: '2',
            description: 'Cuarta razón de la beca',
            name: 'No aplica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_4,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createScholarshipReason5Catalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Quinta razón de la beca',
            name: 'Discapacidad',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_5,
        });
        catalogues.push({
            code: '2',
            description: 'Quinta razón de la beca',
            name: 'No aplica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_5,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createScholarshipReason6Catalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Sexta razón de la beca',
            name: 'Otra',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_6,
        });
        catalogues.push({
            code: '2',
            description: 'Sexta razón de la beca',
            name: 'No aplica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_REASON_6,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createScholarshipTypeCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Tipo de beca',
            name: 'Total',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_TYPE,
        });
        catalogues.push({
            code: '2',
            description: 'Tipo de beca',
            name: 'Parcial',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_TYPE,
        });
        catalogues.push({
            code: '3',
            description: 'Tipo de beca',
            name: 'No aplica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_TYPE,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createScholarshipFundingTypeCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Tipo de financiamento de beca',
            name: 'Fondos propios',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_FUNDING_TYPE,
        });
        catalogues.push({
            code: '2',
            description: 'Tipo de financiamento de beca',
            name: 'Transferencia del Estado',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_FUNDING_TYPE,
        });
        catalogues.push({
            code: '3',
            description: 'Tipo de financiamento de beca',
            name: 'Donaciones',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_FUNDING_TYPE,
        });
        catalogues.push({
            code: '4',
            description: 'Tipo de financiamento de beca',
            name: 'No aplica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOLARSHIP_FUNDING_TYPE,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createSchoolDayCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Jornada',
            name: 'Matutina',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOOL_DAY,
        });
        catalogues.push({
            code: '2',
            description: 'Jornada',
            name: 'Vespertina',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOOL_DAY,
        });
        catalogues.push({
            code: '3',
            description: 'Jornada',
            name: 'Nocturna',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOOL_DAY,
        });
        catalogues.push({
            code: '4',
            description: 'Jornada',
            name: 'Intensiva',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOOL_DAY,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createSchoolTypeCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Tipo de colegio',
            name: 'Fiscal',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOOL_TYPE,
        });
        catalogues.push({
            code: '2',
            description: 'Tipo de colegio',
            name: 'Fiscomisional',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOOL_TYPE,
        });
        catalogues.push({
            code: '3',
            description: 'Tipo de colegio',
            name: 'Particular',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOOL_TYPE,
        });
        catalogues.push({
            code: '4',
            description: 'Tipo de colegio',
            name: 'Minicipal',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOOL_TYPE,
        });
        catalogues.push({
            code: '5',
            description: 'Tipo de colegio',
            name: 'Extranjero',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOOL_TYPE,
        });
        catalogues.push({
            code: '6',
            description: 'Tipo de colegio',
            name: 'No registra',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SCHOOL_TYPE,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createSexCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'sexo',
            name: 'Hombre',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SEX,
        });
        catalogues.push({
            code: '2',
            description: 'sexo',
            name: 'Mujer',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.SEX,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createStudentIncomeForCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Para que emplea sus ingresos',
            name: 'Financiar sus estudios',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.STUDENT_INCOME_FOR,
        });
        catalogues.push({
            code: '2',
            description: 'Para que emplea sus ingresos',
            name: 'Para mantener a su hogar',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.STUDENT_INCOME_FOR,
        });
        catalogues.push({
            code: '3',
            description: 'Para que emplea sus ingresos',
            name: 'Gastos personales',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.STUDENT_INCOME_FOR,
        });
        catalogues.push({
            code: '4',
            description: 'Para que emplea sus ingresos',
            name: 'No aplica',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.STUDENT_INCOME_FOR,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createStudentOccupationCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Ocupacion del estudiante',
            name: 'Solo estudia',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.STUDENT_OCCUPATION,
        });
        catalogues.push({
            code: '2',
            description: 'Ocupacion del estudiante',
            name: 'Trabaja y estudia',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.STUDENT_OCCUPATION,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createYesNoCatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Si o No',
            name: 'Si',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.YES_NO,
        });
        catalogues.push({
            code: '2',
            description: 'Si o No',
            name: 'No',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.YES_NO,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
    async createYesNoNACatalogues() {
        const catalogues = [];
        catalogues.push({
            code: '1',
            description: 'Si, No y No aplica',
            name: 'Si',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.YES_NO_NA,
        });
        catalogues.push({
            code: '2',
            description: 'Si, No y No aplica',
            name: 'No',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.YES_NO_NA,
        });
        catalogues.push({
            code: '3',
            description: 'Si, No y No aplica',
            name: 'No apliaca',
            state: enums_1.CatalogueStateEnum.ACTIVE,
            type: enums_1.CatalogueTypeEnum.YES_NO_NA,
        });
        for (const catalogue of catalogues) {
            await this.catalogueService.create(catalogue);
        }
    }
};
CataloguesSeeder = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof services_1.CataloguesService !== "undefined" && services_1.CataloguesService) === "function" ? _a : Object])
], CataloguesSeeder);
exports.CataloguesSeeder = CataloguesSeeder;
//# sourceMappingURL=catalogues-seeder.js.map