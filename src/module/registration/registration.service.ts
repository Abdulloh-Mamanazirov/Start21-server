import { Injectable } from '@nestjs/common';
const TelegramBot = require('node-telegram-bot-api');
import type { MessageRequest } from './interfaces';

const BOT_TOKEN = process.env.BOT_TOKEN ?? '6347153154:AAHLYaBjXJH_tku7UC07p16Utpr9UbniVhU'

@Injectable()
export class RegistrationService {
  readonly #_bot: any;
  constructor() {
    this.#_bot = new TelegramBot(BOT_TOKEN,{ polling: true });
  }

  sendMessage(payload: MessageRequest): void {
    this.#_bot.sendMessage(
      1844389500,
      ` Registered user details: \n 
        <b>● Name: </b>${payload.name} 
        <b>● Phone number: </b>${payload.phone} 
        <b>● Registered course: </b>${payload.course}
        <b>● Registered date: </b>${new Date().toLocaleDateString()}
        <b>● Registered time: </b>${new Date().toLocaleTimeString()}`,
      { parse_mode: 'HTML' },
    );
  }
}
