import { IsNotEmpty, IsString } from "class-validator";

export enum gender {
  Pria = "Pria",
  Wanita = "Wanita",
}

export class CreatePesananDto {
  @IsString()
  @IsNotEmpty()
  NIK: string;

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  noHP: string;

  jenisKelamin: gender;

  @IsString()
  userId: string;
}
