import { MongooseModule } from "@nestjs/mongoose";
import { Certificate, CertificateSchema } from "./certificate.schema";
import { CertificateController } from "./certificate.controller";
import { CertificateService } from "./certificate.service";
import { Module } from "@nestjs/common";

@Module({
    imports:[
        MongooseModule.forFeature([{name: Certificate.name, schema: CertificateSchema}])
    ],
    controllers: [CertificateController],
    providers:[CertificateService]
})

export class CertificateModule{}