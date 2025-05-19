import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HomeDocument = Home & Document;

@Schema({ timestamps: true })
export class Home {
  //portuguese
    @Prop({ required: true })
  descricao: string;

  @Prop({ type: [String], required: true })
  soft_skills_pt: string[];

  @Prop({ required: true })
  frase: string;

  //english
  @Prop({ required: true })
  description: string;

  @Prop({ type: [String], required: true })
  soft_skills: string[];

  @Prop({ required: true })
  phrase: string;

  //both
  @Prop({ type: [String], required: true })
  skills: string[];

  @Prop({ required: true })
  photo: string;

  @Prop()
  instagram?: string;

  @Prop({ required: true })
  gmail: string;

  @Prop({ required: true })
  linkedin: string;

  @Prop({ required: true })
  github: string;
}

export const HomeSchema = SchemaFactory.createForClass(Home);
