import { Injectable } from "@nestjs/common";
import { CreateBusDto } from "./dto/create-bus.dto";
import { UpdateBusDto } from "./dto/update-bus.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class BusService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBusDto: CreateBusDto): Promise<CreateBusDto> {
    const Bus = await this.prisma.bus.create({
      data: {
        ...createBusDto,
      },
    });
    return Bus;
  }

  async findAll() {
    return await this.prisma.bus.findMany({
      include: {
        poBus: {
          select: {
            PO: true,
          },
        },
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.bus.findFirst({
      where: { id },
    });
  }

  update(id: number, updateBusDto: UpdateBusDto) {
    return `This action updates a #${id} bus`;
  }

  remove(id: number) {
    return `This action removes a #${id} bus`;
  }
}
