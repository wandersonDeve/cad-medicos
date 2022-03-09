import { Prisma } from '@prisma/client';

export class queryMedico {
  id?: number;
  nome?: string;
  crm?: number;
  fixo?: number;
  celular?: number;
  cep?: number;
  especialidades?: Prisma.EspecialidadeUncheckedCreateNestedManyWithoutMedicosInput;
  rua?: string;
  endereco?: string;
  complemento?: string;
  bairro?: string;
  cidade?: string;
  uf?: string;
}
