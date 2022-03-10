import { IsNotEmpty, IsString } from 'class-validator';
import { Especialidade } from 'especialidade/entities/especialidade.entity';

export class CreateEspecialidadeDto extends Especialidade {
  @IsString()
  @IsNotEmpty()
  nome: string;
}