import { IsNotEmpty, IsString } from 'class-validator';
import { Especialidade } from '../entities/especialidade.entity';

export class CreateEspecialidadeDto extends Especialidade {
  @IsString()
  @IsNotEmpty()
  nome: string;
}
