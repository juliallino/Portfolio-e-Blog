import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {

    @Prop({ type: [String], required: true })
    images: string[];
    
    @Prop({ required:true})
    project_title: string;

    @Prop({ required: true })
    project_description: string;

    @Prop({ required: true })
    workload: string;

    @Prop({ type: [String], required: true })
    tec_icons: string[];

    @Prop({ required: true })
    link: string;

}

export const ProjectSchema = SchemaFactory.createForClass (Project);
