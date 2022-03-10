import { PartialType } from '@nestjs/mapped-types';
import { CreateEspecialidadeDto } from './create-especialidade.dto';

export class UpdateEspecialidadeDto extends PartialType(CreateEspecialidadeDto) {}
