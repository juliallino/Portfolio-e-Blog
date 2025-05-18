import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Home, HomeSchema } from './home.schema';
import { HomeService } from './home.service';
import { HomeController } from './home.controller';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Home.name, schema: HomeSchema }]),
  ],
  controllers: [HomeController],
  providers: [HomeService],
})
export class HomeModule {}
