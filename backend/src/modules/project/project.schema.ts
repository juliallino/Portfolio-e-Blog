import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProjectDocument = Project & Document;

@Schema({ timestamps: true })
export class Project {
    //portuguese
    @Prop({ required:true})
    projeto_titulo: string;

    @Prop({ required: true })
    projeto_description: string;

    //english
    @Prop({ required:true})
    project_title: string;

    @Prop({ required: true })
    project_description: string;

    //both
    @Prop({ required: true })
    workload: string;

    @Prop({ type: [String], required: true })
    tec_icons: string[];

    @Prop({ type: [String], required: true })
    images: string[];
    
    @Prop({ required: true })
    link: string;

}

export const ProjectSchema = SchemaFactory.createForClass (Project);
