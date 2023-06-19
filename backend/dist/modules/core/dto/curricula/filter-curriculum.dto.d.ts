import { PaginationDto } from '@core/dto';
export declare class FilterCurriculumDto extends PaginationDto {
    readonly code: string;
    readonly description: string;
    readonly name: string;
    readonly periodicAcademicNumber: number;
    readonly resolutionNumber: string;
    readonly weeksNumber: number;
}
