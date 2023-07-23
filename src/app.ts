import { Module } from '@nestjs/common';
import { RegistrationModule } from './module';

@Module({
  imports: [RegistrationModule],
})
export class App {}
