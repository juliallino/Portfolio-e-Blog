import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateHomeDto {
  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  skills: string[];

  @IsArray()
  @IsString({ each: true })
  softSkills: string[];

  @IsString()
  phrase: string;

  @IsString()
  photo: string;

  @IsOptional()
  @IsString()
  instagram?: string;

  @IsString()
  gmail?: string;

  @IsString()
  linkedin?: string;

  @IsString()
  github?: string;

  //portuguese
  @IsString()
  descricao: string;

  @IsArray()
  @IsString({ each: true })
  soft_skills_pt: string[];

  @IsString()
  frase: string;
}
