import { IsArray, IsString } from 'class-validator';

export class CreateProjectDto {
    @IsArray()
    @IsString({ each: true })
    images: string[];

    @IsString()
    project_title: string;

    @IsString()
    project_description: string;

    @IsString()
    workload: string;
    
    @IsArray()
    @IsString({ each: true })
    tec_icons: string[];

    @IsString()
    link: string;

}
