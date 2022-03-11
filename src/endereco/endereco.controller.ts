import { Controller, Get, Body, ValidationPipe, UsePipes } from '@nestjs/common';
import { EnderecoService } from './endereco.service';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly endereco: EnderecoService) {}

  @Get()
  @UsePipes(ValidationPipe)
  async getAddress(@Body() cep: string) {
    return this.endereco.address(cep);
  }
}
