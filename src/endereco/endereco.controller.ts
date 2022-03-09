import { Controller, Get, Body } from '@nestjs/common';
import { EnderecoService } from './endereco.service';

@Controller('endereco')
export class EnderecoController {
  constructor(private readonly endereco: EnderecoService) {}

  @Get()
  async getAddress(@Body() cep: string) {
    return this.endereco.address(cep);
  }
}
