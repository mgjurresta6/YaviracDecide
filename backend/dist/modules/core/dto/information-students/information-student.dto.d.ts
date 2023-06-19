import { CatalogueEntity } from '@core/entities';
export declare class InformationStudentDto {
    readonly isExecutedPractice: CatalogueEntity;
    readonly isExecutedCommunity: CatalogueEntity;
    readonly isDisability: CatalogueEntity;
    readonly isLostGratuity: CatalogueEntity;
    readonly isSubjectRepeat: CatalogueEntity;
    readonly address: string;
    readonly community: number;
    readonly contactEmergencyName: string;
    readonly contactEmergencyKinship: string;
    readonly contactEmergencyPhone: string;
    readonly disabilityPercentage: number;
    readonly educationalAmount: number;
    readonly economicAmount: number;
    readonly familyIncome: number;
    readonly membersHouseNumber: number;
    readonly postalCode: string;
    readonly practiceHours: number;
    readonly scholarshipAmount: number;
    readonly tariffScholarshipPercentage: number;
}
