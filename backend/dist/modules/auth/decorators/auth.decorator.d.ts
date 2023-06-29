import { RoleEntity } from '@auth/entities';
export declare function Auth(...roles: RoleEntity[]): <TFunction extends Function, Y>(target: object | TFunction, propertyKey?: string | symbol, descriptor?: TypedPropertyDescriptor<Y>) => void;
