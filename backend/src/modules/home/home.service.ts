import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Home, HomeDocument } from './home.schema';
import { CreateHomeDto } from 'src/common/dto/home.dto';

@Injectable()
export class HomeService {
  constructor(
    @InjectModel(Home.name) private homeModel: Model<HomeDocument>,
  ) {}

  async create(data: CreateHomeDto): Promise<Home> {
    return this.homeModel.create(data);
  }

  async findAll(): Promise<Home[]> {
    return this.homeModel.find().exec();
  }

  async findOne(id: string): Promise<Home | null> {
    return this.homeModel.findById(id).exec();
  }

async update(id: string, data: Partial<CreateHomeDto>): Promise<Home | null> {
  return this.homeModel.findByIdAndUpdate(id, data, { new: true }).exec();
}

async delete(id: string, data: any): Promise<Home | null> {
  return this.homeModel.findByIdAndDelete(id).exec();
}

}
