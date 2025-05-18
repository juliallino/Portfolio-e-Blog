import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HomeDocument = Home & Document;

@Schema({ timestamps: true })
export class Home {
  @Prop({ required: true })
  description: string;

  @Prop({ type: [String], required: true })
  skills: string[];

  @Prop({ type: [String], required: true })
  soft_skills: string[];

  @Prop({ required: true })
  phrase: string;

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
