import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UnauthorizedException,
  Request,
} from "@nestjs/common";
import { PesananService } from "./pesanan.service";
import { CreatePesananDto } from "./dto/create-pesanan.dto";
import { UpdatePesananDto } from "./dto/update-pesanan.dto";
import { JwtService } from "@nestjs/jwt";

@Controller("pesanan")
export class PesananController {
  constructor(
    private readonly pesananService: PesananService,
    private jwtService: JwtService,
  ) {}

  @Post(":busId")
  create(
    @Body() createPesananDto: CreatePesananDto,
    @Param("busId") busId: string,
    @Request() req,
  ) {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
      throw new UnauthorizedException("Token not provided");
    }

    try {
      const decoded = this.jwtService.decode(token) as any;
      console.log("🚀 ~ PesananController ~ create ~ decoded:", decoded);
      const userId = decoded.id;

      return this.pesananService.create(userId, busId, createPesananDto);
    } catch (error) {
      throw new UnauthorizedException("Invalid token");
    }
  }

  @Get()
  findAll() {
    return this.pesananService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.pesananService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePesananDto: UpdatePesananDto) {
    return this.pesananService.update(+id, updatePesananDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.pesananService.remove(+id);
  }
}
