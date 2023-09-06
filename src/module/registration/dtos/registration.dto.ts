import { IsNotEmpty, IsPhoneNumber, IsString } from "class-validator";
import type { MessageRequest } from "../interfaces";

export class MessageRequestDto implements MessageRequest {
    @IsString()
    @IsNotEmpty()
    name: string
    
    @IsPhoneNumber('UZ')
    @IsNotEmpty()
    phone: string

    @IsString()
    @IsNotEmpty()
    course: string
}
