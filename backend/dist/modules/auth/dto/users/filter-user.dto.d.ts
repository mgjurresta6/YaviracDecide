import { PaginationDto } from '@core/dto';
export declare class FilterUserDto extends PaginationDto {
    readonly birthdate: Date;
    readonly email: string;
    readonly lastname: string;
    readonly name: string;
    readonly username: string;
}
