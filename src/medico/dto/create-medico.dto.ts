import { IsNotEmpty, IsNumber, IsOptional, IsString, Length, Max } from "class-validator";
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

  @IsString()
  @IsNotEmpty({ message: 'O campo RUA não pode ser vazio' })
  rua: string;

  @IsString()
  @IsOptional()
  complemento?: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo CIDADE não pode ser vazio' })
  cidade: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo BAIRRO não pode ser vazio' })
  bairro: string;

  @IsString()
  @IsNotEmpty({ message: 'O campo UF não pode ser vazio' })
  uf: string;
}
