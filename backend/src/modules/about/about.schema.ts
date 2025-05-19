import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type AboutDocument = About & Document;

@Schema({ timestamps: true })
export class About extends Document {
  //portuguese
  @Prop({ required: true })
  descricao: string;

  //english
  @Prop({ required: true })
  description: string;
  
  //both
  @Prop({
    type: [String], required: true, validate: {
      validator: (images: string[]) => images.length <= 10,
      message: 'The images array must contain up to 10 URLs.'
    }
  })
  images: string[];
}

export const AboutSchema = SchemaFactory.createForClass(About);