import { Module } from '@nestjs/common';
import { EspecialidadeService } from './especialidade.service';
import { EspecialidadeController } from './especialidade.controller';

@Module({
  controllers: [EspecialidadeController],
  providers: [EspecialidadeService]
})
export class EspecialidadeModule {}
