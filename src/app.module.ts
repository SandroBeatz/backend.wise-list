import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { ListModule } from './list/list.module';
import { ListItemModule } from './list-item/list-item.module';

@Module({
  imports: [PrismaModule, ListModule, ListItemModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
