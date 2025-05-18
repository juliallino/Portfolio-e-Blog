import { Controller, Get, Post, Body, Patch, Param, Delete, NotFoundException } from '@nestjs/common';
import { AboutService } from './about.service';
import { CreateAboutDto } from '../../common/dto/about.dto';

@Controller('about')
export class AboutController {
  constructor(private readonly aboutService: AboutService) {}

  @Get()
  findAll() {
    return this.aboutService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const about = await this.aboutService.findById(id);
    if (!about) throw new NotFoundException(`About com id ${id} não encontrado`);
    return about;
  }

  @Post()
  create(@Body() dto: CreateAboutDto) {
    return this.aboutService.create(dto);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() dto: Partial<CreateAboutDto>) {
    const updated = await this.aboutService.update(id, dto);
    if (!updated) throw new NotFoundException(`About com id ${id} não encontrado`);
    return updated;
  }

  @Delete(':id')
  async delete(@Param('id') id: string) {
    const deleted = await this.aboutService.delete(id);
    if (!deleted) throw new NotFoundException(`About com id ${id} não encontrado`);
    return { message: 'Registro removido com sucesso', deleted };
  }
}
