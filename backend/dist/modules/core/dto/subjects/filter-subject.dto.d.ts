import { PaginationDto } from '@core/dto';
export declare class FilterSubjectDto extends PaginationDto {
    readonly autonomousHour: number;
    readonly code: string;
    readonly name: string;
}
