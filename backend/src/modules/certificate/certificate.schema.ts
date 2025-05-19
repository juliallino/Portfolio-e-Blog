import { Prop, SchemaFactory } from "@nestjs/mongoose";
import { Schema } from "@nestjs/mongoose";

export type CertificateDocument = Certificate & Document;

@Schema()
export class Certificate {
    //portuguese
     @Prop({ required: true })
    titulo: string;
    
    @Prop({ required: true })
    certificado_descicao: string;

    @Prop({ required: true })
    data: string;

    //english
    @Prop({ required: true })
    title: string;
    
    @Prop({ required: true })
    certificate_description: string;

    @Prop({ required: true })
    date: string;
    
    //both
    @Prop({ required: true })
    workload:string
    
    @Prop({ required: true })
    platform: string;

    @Prop({ required: true })
    link: string;

}

export const CertificateSchema = SchemaFactory.createForClass(Certificate);