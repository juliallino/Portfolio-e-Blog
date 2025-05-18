import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { About, AboutDocument } from './about.schema.js';
import { CreateAboutDto } from 'src/common/dto/about.dto';

@Injectable()
export class AboutService {
  constructor(@InjectModel(About.name) private aboutModel: Model<AboutDocument>) {}

  async findAll(): Promise<About[]> {
    return this.aboutModel.find().exec();
  }

  async findById(id: string): Promise<About | null> {
    return this.aboutModel.findById(id).exec();
  }

  async create(data: CreateAboutDto): Promise<About> {
    const created = new this.aboutModel(data);
    return created.save();
  }
  

  async update(id: string, data: Partial<CreateAboutDto>): Promise<About | null> {
    return this.aboutModel.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string): Promise<About | null> {
    return this.aboutModel.findByIdAndDelete(id).exec();
  }
}
