import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateMedicoDto } from './dto/create-medico.dto';
import { UpdateMedicoDto } from './dto/update-medico.dto';
import { Medico } from './entities/medico.entity';

@Injectable()
export class MedicoService {
  constructor(private readonly db: PrismaService) {}

  async create(data: CreateMedicoDto) {
    const medico = await this.db.medico.findUnique({
      where: {
        crm: data.crm,
      },
    });

    if (medico) {
      throw new BadRequestException(
        'CRM já esta cadastrado',
      );
    }

    if (data.especialidades[0] < 8 || data.especialidades[1] > 8) {
      throw new BadRequestException(
        'Especialidade não existente',
      );
    }

    const novoMedico = await this.db.medico.create({
      data: {
        ...data,
        especialidades: {
          connect: [
            { id: data.especialidades[0] },
            { id: data.especialidades[1] },
          ],
        },
      },
      include: {
        especialidades: {
          select: {
            nome: true,
          },
        },
      },
    });

    return novoMedico;
  }

  async pesquisar(queryDto: Medico) {
    const { nome, crm, fixo, celular, } = queryDto;

    if (!nome && !crm && !fixo && !celular) {
      throw new BadRequestException('Sem dados para filtrar');
    }

    const cadastro = await this.db.medico.findMany({
      where: {
        nome: {
          contains: nome,
        },
        OR: {
          crm: {
            equals: +crm,
          },
          OR: {
            celular: {
              equals: +celular,
            },
            OR: {
              fixo: {
                equals: +fixo,
              },
            },
          },
        },
      },
    });

    if (!cadastro) {
      throw new BadRequestException('cadastro não encontrado');
    }

    return cadastro;
  }

  async findAll() {
    const medico = await this.db.medico.findMany({
      include: {
        especialidades: {
          select: {
            nome: true,
          },
        },
      },
    });

    return medico;
  }

  async findOne(id: number) {
    const medico = await this.db.medico.findUnique({
      where: {
        id: id,
      },
      include: {
        especialidades: {
          select: {
            nome: true,
          },
        },
      },
    });

    if (!medico) {
      throw new BadRequestException('Cadastro Medico não encontrado');
    }

    return medico;
  }

  async update(id: number, data: UpdateMedicoDto) {
    const medico = await this.db.medico.findUnique({
      where: {
        id: id,
      },
    });

    if (!medico) {
      throw new BadRequestException('Cadastro Medico não encontrado');
    }

    const novoMedico = await this.db.medico.update({
      where: {
        id: id,
      },
      data: {
        ...data,
        especialidades: {
          connect: [
            { id: data.especialidades[0] },
            { id: data.especialidades[1] },
          ],
        },
      },
      include: {
        especialidades: {
          select: {
            nome: true,
          },
        },
      },
    });

    return novoMedico;
  }

  async remove(id: number) {
    const medico = await this.db.medico.findUnique({
      where: {
        id: id,
      },
    });

    if (!medico) {
      throw new BadRequestException('Cadastro Medico não encontrado');
    }

    await this.db.medico.delete({
      where: {
        id: id,
      },
    });

    return 'Cadastro excluido com sucesso';
  }
}