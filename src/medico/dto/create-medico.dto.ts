import { IsNotEmpty, IsNumber, IsString, Length, Max } from "class-validator";
import { Medico } from "../entities/medico.entity";

export class CreateMedicoDto extends Medico
{
  @IsString({ message: 'O campo nome deve ser uma string' })
  @Length(3, 120, { message: 'O campo nome deve ter entre 3 e 120 caracteres' })
  @IsNotEmpty({ message: 'O campo nome não pode ser vazio' })
  nome: string;

  @IsNumber()
  @Max(9999999, { message: 'O campo CRM deve conter ate sete digitos numericos' })
  @IsNotEmpty({ message: 'O campo CRM não pode ser vazio' })
  crm: number;

  @IsNumber()
  @IsNotEmpty({ message: 'O campo Celular não pode ser vazio' })
  fixo: number;

  @IsNumber()
  @IsNotEmpty({ message: 'O campo Celular não pode ser vazio' })
  celular: number;

  @IsNumber()
  @IsNotEmpty({ message: 'O campo CEP não pode ser vazio' })
  cep: number;
}
