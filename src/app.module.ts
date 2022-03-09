import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MedicoModule } from './medico/medico.module';
import { EnderecoModule } from './endereco/endereco.module';

@Module({
  imports: [MedicoModule, EnderecoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
