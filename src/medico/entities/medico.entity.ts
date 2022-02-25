import { Prisma } from "@prisma/client";

export class Medico implements Prisma.MedicoUncheckedCreateInput{
  id?: number;
  nome: string;
  crm: number;
  fixo: number;
  celular: number;
  cep: number;
  especialidades?: Prisma.EspecialidadeUncheckedCreateNestedManyWithoutMedicosInput;
}
