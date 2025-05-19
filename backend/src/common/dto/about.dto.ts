import { IsArray, IsString } from 'class-validator';
export class CreateAboutDto {
  @IsString()
  description: string;

  @IsArray()
  @IsString({ each: true })
  images: string[];

  @IsString()
  descricao: string;
}
