import { Body, Controller, Delete, Get, NotFoundException, Param, Patch, Post } from '@nestjs/common';
import { ProjectService } from "./project.service";
import { CreateProjectDto } from "src/common/dto/project.dto";

@Controller('Project')
export class ProjectController {
    constructor(private ProjectService: ProjectService) { }

    @Post()
    create(@Body() data: CreateProjectDto) {
        return this.ProjectService.create(data);
    }

    @Get()
    findAll() {
        return this.ProjectService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id') id: string) {
        const result = await this.ProjectService.findOne(id);
        if (!result) {
            throw new NotFoundException(`Project id ${id} not found`);
        }
        return result;
    }

    @Patch(':id')
    async update(@Param('id') id: string, @Body() data: Partial<CreateProjectDto>) {
        const updated = await this.ProjectService.update(id, data);
        if (!updated) {
            throw new NotFoundException(`Project id ${id} not found`);
        }
        return updated;
    }

    @Delete(':id')
    async delete(@Param('id') id: string, data: any) {
        const deleted = await this.ProjectService.delete(id, data);
        if (!deleted) {
            throw new NotFoundException(`Project id ${id} not found`);;
        }
        return { message: 'Registro deletado com sucesso', deleted };
    }

}