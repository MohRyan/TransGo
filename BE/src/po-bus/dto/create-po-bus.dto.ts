import { IsNotEmpty, IsString } from "class-validator";

export class CreatePoBusDto {
  @IsNotEmpty()
  @IsString()
  PO: string;
}
