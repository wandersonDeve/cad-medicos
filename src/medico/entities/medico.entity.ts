import { Prisma } from "@prisma/client";

export class Medico implements Prisma.MedicoUncheckedCreateInput{
  id?: number;
  nome: string;
  crm: number;
  fixo: number;
  celular: number;
  cep: number;
  rua: string;
  complemento?: string;
  bairro: string;
  cidade: string;
  uf: string;
  especialidades?: Prisma.EspecialidadeUncheckedCreateNestedManyWithoutMedicosInput;
}
