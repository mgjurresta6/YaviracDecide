import { PaginationDto } from '@core/dto';
export declare class FilterCareerDto extends PaginationDto {
    readonly acronym: string;
    readonly code: string;
    readonly codeSniese: string;
    readonly logo: string;
    readonly name: string;
    readonly resolutionNumber: number;
    readonly shortName: string;
    readonly title: string;
}
