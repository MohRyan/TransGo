import { PartialType } from '@nestjs/mapped-types';
import { CreatePoBusDto } from './create-po-bus.dto';

export class UpdatePoBusDto extends PartialType(CreatePoBusDto) {}
