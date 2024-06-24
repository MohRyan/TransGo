import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { PoBusModule } from './po-bus/po-bus.module';
import { PesananModule } from './pesanan/pesanan.module';
import { BusModule } from './bus/bus.module';

@Module({
  imports: [UsersModule, AuthModule, PoBusModule, PesananModule, BusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
