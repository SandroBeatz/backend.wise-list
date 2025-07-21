import { Module } from '@nestjs/common';
import { ListItemService } from './list-item.service';
import { ListItemController } from './list-item.controller';
import {ListService} from "../list/list.service";

@Module({
  controllers: [ListItemController],
  providers: [ListItemService, ListService],
})
export class ListItemModule {}
