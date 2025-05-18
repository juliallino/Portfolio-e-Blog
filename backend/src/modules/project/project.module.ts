import { Project, ProjectSchema } from "./project.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { ProjectController } from "./project.controller";
import { ProjectService } from "./project.service";
import { Module } from "@nestjs/common";

@Module({
    imports:[
        MongooseModule.forFeature([{name:Project.name, schema:ProjectSchema}]),
    ],
    controllers: [ProjectController],
    providers:[ProjectService]
})

export class ProjectModule{}