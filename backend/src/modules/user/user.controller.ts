import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards, Req } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from 'src/common/dto/user.dto';
import { NotFoundException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller('User')
export class UserController {
  constructor(private readonly UserService: UserService) {}

  @Post()
  create(@Body() data: CreateUserDto) {
    return this.UserService.create(data);
  }
@Get('me')
getProfile(@Req() req: Request) {
  return req.user;
}
  @Get()
  findAll() {
    return this.UserService.findAll();
  }

@Get(':id')
async findOne(@Param('id') id: string) {
  const result = await this.UserService.findOne(id);
  if (!result) {
    throw new NotFoundException(`User id ${id} not found`);
  }
  return result;
}

@Patch(':id')
async update(@Param('id') id: string, @Body() data: Partial<CreateUserDto>) {
  const updated = await this.UserService.update(id, data);
  if (!updated) {
    throw new NotFoundException(`User id ${id} not found`);
  }
  return updated;
}

@Delete(':id')
async delete(@Param('id') id: string, data: any) {
  const deleted = await this.UserService.delete(id, data);
  if (!deleted) {
    throw new NotFoundException(`User id ${id} not found`);
  }
  return { message: 'Registro deletado com sucesso', deleted };
}
}
