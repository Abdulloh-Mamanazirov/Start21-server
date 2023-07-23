import { IsNotEmpty, IsString } from "class-validator";
import type { MessageRequest } from "../interfaces";

export class MessageRequestDto implements MessageRequest {
    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsString()
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsNotEmpty()
    course: string
}
