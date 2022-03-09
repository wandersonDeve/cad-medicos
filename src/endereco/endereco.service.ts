import { BadRequestException, Injectable } from '@nestjs/common';
import { CepResponse, consultarCep } from 'correios-brasil';

@Injectable()
export class EnderecoService {
  async address(body:any) {
    const { cep } = body;
 
    if (!cep) {
      throw new BadRequestException('CEP não informado');
    }

    const endereco = await consultarCep(cep).then((response: CepResponse) => response);

    delete endereco.ibge
    delete endereco.gia
    
    return endereco
  }
}
