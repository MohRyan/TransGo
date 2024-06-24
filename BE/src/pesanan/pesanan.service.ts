import { Injectable } from "@nestjs/common";
import { CreatePesananDto } from "./dto/create-pesanan.dto";
import { UpdatePesananDto } from "./dto/update-pesanan.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PesananService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    userId: string,
    busId: string,
    createPesananDto: CreatePesananDto,
  ) {
    const order = await this.prisma.pesanan.create({
      data: {
        ...createPesananDto,
        userId: userId,
        busId: busId,
      },
    });
    return order;
  }

  async findAll() {
    return await this.prisma.pesanan.findMany({
      include: {
        bus: {
          include: {
            poBus: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.pesanan.findFirst({
      where: { id },
      include: {
        bus: {
          include: {
            poBus: true,
          },
        },
      },
    });
  }

  update(id: number, updatePesananDto: UpdatePesananDto) {
    return `This action updates a #${id} pesanan`;
  }

  remove(id: number) {
    return `This action removes a #${id} pesanan`;
  }
}
