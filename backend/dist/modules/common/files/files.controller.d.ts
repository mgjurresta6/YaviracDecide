/// <reference types="multer" />
import { FilesService } from './files.service';
export declare class FilesController {
    private readonly filesService;
    constructor(filesService: FilesService);
    upload(file: Express.Multer.File): Promise<Express.Multer.File | "hola">;
}
