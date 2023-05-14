import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AppService {
  constructor(private config: ConfigService) {}

  getHello(): string {
    const author = this.config.get('AUTHOR');
    return `Hello World! By ${author} Ver.2`;
  }
}
