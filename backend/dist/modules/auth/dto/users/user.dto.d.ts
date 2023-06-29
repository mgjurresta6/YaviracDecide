import { CatalogueEntity } from '@core/entities';
export declare class UserDto {
    readonly bloodType: CatalogueEntity;
    readonly ethnicOrigin: CatalogueEntity;
    readonly identificationType: CatalogueEntity;
    readonly gender: CatalogueEntity;
    readonly maritalStatus: CatalogueEntity;
    readonly sex: CatalogueEntity;
    readonly birthdate: Date;
    readonly identification: string;
    readonly email: string;
    readonly emailVerifiedAt: string;
    readonly lastname: string;
    readonly password: string;
    readonly passwordChanged: boolean;
    readonly personalEmail: string;
    readonly phone: string;
    readonly name: string;
    readonly roles: any;
    readonly username: string;
}
