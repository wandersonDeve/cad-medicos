import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
  ParseIntPipe,
} from '@nestjs/common';
import { EspecialidadeService } from 'especialidade/especialidade.service';
import { CreateEspecialidadeDto } from 'especialidade/dto/create-especialidade.dto';
import { UpdateEspecialidadeDto } from 'especialidade/dto/update-especialidade.dto';

@Controller('especialidade')
export class EspecialidadeController {
  constructor(private readonly especialidadeService: EspecialidadeService) {}

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() createEspecialidadeDto: CreateEspecialidadeDto) {
    return this.especialidadeService.create(createEspecialidadeDto);
  }

  @Post('/many')
  @UsePipes(ValidationPipe)
  createMany(@Body() data: any) {
    return this.especialidadeService.createMany({
      data,
      skipDuplicates: true,
    });
  }

  @Get()
  @UsePipes(ValidationPipe)
  findAll() {
    return this.especialidadeService.findAll();
  }

  @Get(':id')
  @UsePipes(ValidationPipe)
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.especialidadeService.findOne(id);
  }

  @Patch(':id')
  @UsePipes(ValidationPipe)
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateEspecialidadeDto: UpdateEspecialidadeDto,
  ) {
    return this.especialidadeService.update(id, updateEspecialidadeDto);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.especialidadeService.remove(id);
  }
}
