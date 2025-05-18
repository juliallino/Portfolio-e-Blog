import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { CertificateService } from "./certificate.service";
import { CreateCertificateDto } from "src/common/dto/certificate.dto";

@Controller('Certificate')
export class CertificateController {
    constructor(private CertificateService: CertificateService) { }

    @Post()
    create(@Body() data: CreateCertificateDto) {
        return this.CertificateService.create(data);
    }

    @Get()
    findAll() {
        return this.CertificateService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const result = await this.CertificateService.findOne(id);
        if (!result) {
            throw new NotFoundException(`Certificate id ${id} not found`);
        }
        return result;
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: Partial<CreateCertificateDto>) {
        const updated = await this.CertificateService.update(id, data);
        if (!updated) {
            throw new NotFoundException(`Certificate id ${id} not found`);
        }
        return updated;
    }

    @Delete(':id')
    async delete(@Param('id') id: string, data: any) {
        const deleted = await this.CertificateService.delete(id, data);
        if (!deleted) {
            throw new NotFoundException(`Certificate id ${id} not found`);;
        }
        return { message: 'Registro deletado com sucesso', deleted };
    }

}