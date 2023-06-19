import { CatalogueEntity, StudentEntity } from '@core/entities';
export declare class InformationStudentEntity {
    id: string;
    createdAt: Date;
    updateAt: Date;
    deletedAt: Date;
    student: StudentEntity;
    isExecutedPractice: CatalogueEntity;
    isExecutedCommunity: CatalogueEntity;
    isDisability: CatalogueEntity;
    isLostGratuity: CatalogueEntity;
    isSubjectRepeat: CatalogueEntity;
    address: string;
    community: number;
    contactEmergencyName: string;
    contactEmergencyKinship: string;
    contactEmergencyPhone: string;
    disabilityPercentage: number;
    economicAmount: number;
    educationalAmount: number;
    familyIncome: number;
    financingScholarshipType: string;
    membersHouseNumber: number;
    practiceHours: number;
    postalCode: string;
    scholarshipAmount: number;
    tariffScholarshipPercentage: number;
}
