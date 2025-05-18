import { Controller, Post, Body, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/common/dto/user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() body: { email: string; password: string }) {
    const user = await this.authService.validateUser(body.email, body.password);
    if (!user) {
      throw new UnauthorizedException('Credenciais inválidas');
    }
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() data: CreateUserDto) {
    const existingUser = await this.authService.findByEmail(data.email);
    if (existingUser) {
      throw new UnauthorizedException('Email já está em uso');
    }
    const user = await this.authService.createUser(data);
    return this.authService.login(user);
  }
}