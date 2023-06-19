import { PaginationDto } from '@core/dto';
export declare class FilterInformationStudentDto extends PaginationDto {
    readonly community: number;
    readonly address: string;
    readonly contactEmergencyName: string;
    readonly contactEmergencyKinship: string;
    readonly contactEmergencyPhone: string;
    readonly postalCode: string;
}
