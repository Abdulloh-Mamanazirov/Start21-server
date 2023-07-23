import { Controller, Body, Post } from '@nestjs/common';
import { RegistrationService } from './registration.service';
import { MessageRequestDto } from './dtos';

@Controller({
  path: 'register',
  version: '1',
})
export class RegistrationController {
  readonly #_service: RegistrationService;
  constructor(service: RegistrationService) {
    this.#_service = service;
  }

  @Post()
  sendMessage(@Body() body: MessageRequestDto) {
    return this.#_service.sendMessage(body);
  }
}
