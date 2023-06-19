import { CatalogueEntity } from '@core/entities';
export declare class InstitutionEntity {
    id: string;
    createAt: Date;
    updateAt: Date;
    deleteAt: Date;
    address: CatalogueEntity;
    state: CatalogueEntity;
    acronym: string;
    cellphone: string;
    code: string;
    codeSniese: string;
    denomination: string;
    email: string;
    logo: string;
    name: string;
    phone: string;
    shortName: string;
    slogan: string;
    web: string;
}
