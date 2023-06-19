import { PaginationDto } from '@core/dto';
export declare class FilterInformationTeacherDto extends PaginationDto {
    readonly academicUnit: string;
    readonly degreeHigherEducation: string;
    readonly holidays: Date;
    readonly institutionHigherEducation: string;
    readonly otherHours: string;
    readonly technical: string;
    readonly technology: string;
}
