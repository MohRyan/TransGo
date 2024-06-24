import { Module } from "@nestjs/common";
import { PesananService } from "./pesanan.service";
import { PesananController } from "./pesanan.controller";
import { PrismaService } from "src/prisma/prisma.service";
import { JwtService } from "@nestjs/jwt";

@Module({
  controllers: [PesananController],
  providers: [PesananService, PrismaService, JwtService],
})
export class PesananModule {}
