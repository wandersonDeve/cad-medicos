import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from './../prisma.service';
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
      throw new BadRequestException('CRM já esta cadastrado');
    }

    const novoMedico = await this.db.medico.create({
      data: {
        ...data,
        especialidades: {
          connect: data.especialidades.connect,
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
    if (!queryDto) {
      throw new BadRequestException('Sem dados para filtrar');
    }

    const cadastro = await this.db.medico.findMany({
      where: {
        nome: {
          contains: queryDto.nome,
        },
        OR: {
          celular: {
            equals: queryDto.celular,
          },
          OR: {
            fixo: {
              equals: queryDto.fixo,
            },
            OR: {
              cep: {
                equals: queryDto.cep,
              },
              OR: {
                rua: {
                  equals: queryDto.rua,
                },
                OR: {
                  bairro: {
                    equals: queryDto.bairro,
                  },
                },
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
          connect: data.especialidades.connect,
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
