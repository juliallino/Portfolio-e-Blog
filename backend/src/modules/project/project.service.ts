import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { ProjectDocument, Project } from "./project.schema";
import { Model } from "mongoose";
import { CreateProjectDto } from "src/common/dto/project.dto";

@Injectable()
export class ProjectService {
    constructor(
        @InjectModel(Project.name) private ProjectModel: Model<ProjectDocument>,
    ) { }

    async create(data: CreateProjectDto): Promise<Project> {
        return this.ProjectModel.create(data);
    }

    async findAll(): Promise<Project[]> {
        return this.ProjectModel.find().exec();
    }
    async findOne(id: string): Promise<Project | null> {
        return this.ProjectModel.findById(id).exec();
    }
    async update(id: string, data: Partial<CreateProjectDto>): Promise<Project | null> {
        return this.ProjectModel.findByIdAndUpdate(id, data, { new: true }).exec();
    }
    async delete(id: string, data: any): Promise<Project | null> {
        return this.ProjectModel.findByIdAndDelete(id).exec();
    }

}