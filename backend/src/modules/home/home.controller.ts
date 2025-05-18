import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { HomeService } from './home.service';
import { CreateHomeDto } from 'src/common/dto/home.dto';
import { NotFoundException } from '@nestjs/common';

@Controller('home')
export class HomeController {
  constructor(private readonly homeService: HomeService) {}

  @Post()
  create(@Body() data: CreateHomeDto) {
    return this.homeService.create(data);
  }

  @Get()
  findAll() {
    return this.homeService.findAll();
  }

@Get(':id')
async findOne(@Param('id') id: string) {
  const result = await this.homeService.findOne(id);
  if (!result) {
    throw new NotFoundException(`Home id ${id} not found`);
  }
  return result;
}


@Patch(':id')
async update(@Param('id') id: string, @Body() data: Partial<CreateHomeDto>) {
  const updated = await this.homeService.update(id, data);
  if (!updated) {
    throw new NotFoundException(`Home id ${id} not found`);
  }
  return updated;
}


@Delete(':id')
async delete(@Param('id') id: string, data: any) {
  const deleted = await this.homeService.delete(id, data);
  if (!deleted) {
    throw new NotFoundException(`Home id ${id} not found`);
  }
  return { message: 'Registro deletado com sucesso', deleted };
}
}
