import { IsString } from 'class-validator';

export class CreateCertificateDto {
    @IsString()
    title: string;
    
    @IsString()
    certificate_description: string;

    @IsString()
    date: string;
    
    @IsString()
    platform: string;

    @IsString()
    workload:string

    @IsString()
    link: string;
}