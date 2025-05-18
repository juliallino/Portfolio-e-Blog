import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { CertificateDocument, Certificate } from "./certificate.schema";
import { Model } from "mongoose";
import { CreateCertificateDto } from "src/common/dto/certificate.dto";

@Injectable()
export class CertificateService {
    constructor(
        @InjectModel(Certificate.name) private CertificateModel: Model<CertificateDocument>,
    ) { }

    async create(data: CreateCertificateDto): Promise<Certificate> {
        return this.CertificateModel.create(data);
    }

    async findAll(): Promise<Certificate[]> {
        return this.CertificateModel.find().exec();
    }
    async findOne(id: string): Promise<Certificate | null> {
        return this.CertificateModel.findById(id).exec();
    }
    async update(id: string, data: Partial<CreateCertificateDto>): Promise<Certificate | null> {
        return this.CertificateModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async delete(id: string, data: any): Promise<Certificate | null> {
        return this.CertificateModel.findByIdAndDelete(id).exec();
    }

}