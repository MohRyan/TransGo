import { Module } from "@nestjs/common";
import { PoBusService } from "./po-bus.service";
import { PoBusController } from "./po-bus.controller";
import { PrismaService } from "src/prisma/prisma.service";

@Module({
  controllers: [PoBusController],
  providers: [PoBusService, PrismaService],
})
export class PoBusModule {}
