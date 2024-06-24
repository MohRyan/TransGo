import { IsNumber, IsString } from "class-validator";

export class CreateBusDto {
  @IsString()
  bus: string;

  @IsNumber()
  price: number;

  @IsString()
  from: string;

  @IsString()
  to: string;

  @IsString()
  going: string;

  @IsNumber()
  totalTiket: number;

  @IsString()
  poBusId?: string;
}
