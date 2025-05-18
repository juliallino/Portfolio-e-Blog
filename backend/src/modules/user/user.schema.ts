
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type UserDocument = User & Document;

@Schema({ timestamps: true })
export class User {
    [x: string]: any;
    @Prop({ required: true })
    email: string;

    @Prop({ required: true })
    password: string;

}

export const UserSchema = SchemaFactory.createForClass(User);