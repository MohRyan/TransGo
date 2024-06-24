import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from "@nestjs/common";
import { PoBusService } from "./po-bus.service";
import { CreatePoBusDto } from "./dto/create-po-bus.dto";
import { UpdatePoBusDto } from "./dto/update-po-bus.dto";

@Controller("po-bus")
export class PoBusController {
  constructor(private readonly poBusService: PoBusService) {}

  @Post()
  create(@Body() createPoBusDto: CreatePoBusDto) {
    return this.poBusService.create(createPoBusDto);
  }

  @Get()
  findAll() {
    return this.poBusService.findAll();
  }

  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.poBusService.findOne(id);
  }

  @Patch(":id")
  update(@Param("id") id: string, @Body() updatePoBusDto: UpdatePoBusDto) {
    return this.poBusService.update(+id, updatePoBusDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.poBusService.remove(+id);
  }
}
