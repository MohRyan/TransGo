import { Injectable } from "@nestjs/common";
import { CreatePoBusDto } from "./dto/create-po-bus.dto";
import { UpdatePoBusDto } from "./dto/update-po-bus.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PoBusService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createPoBusDto: CreatePoBusDto): Promise<CreatePoBusDto> {
    const PoBus = await this.prisma.poBus.create({
      data: {
        ...createPoBusDto,
      },
    });
    return PoBus;
  }

  async findAll() {
    return await this.prisma.poBus.findMany({
      include: {
        bus: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.poBus.findFirst({
      where: { id },
      include: {
        bus: true,
      },
    });
  }

  update(id: number, updatePoBusDto: UpdatePoBusDto) {
    return `This action updates a #${id} poBus`;
  }

  remove(id: number) {
    return `This action removes a #${id} poBus`;
  }
}
