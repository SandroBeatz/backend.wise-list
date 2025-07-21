import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ListItemService } from './list-item.service';
import { CreateListItemDto } from './dto/create-list-item.dto';
import { UpdateListItemDto } from './dto/update-list-item.dto';
import {CompleteListItemDto} from "./dto/complete-list-item.dto";

@Controller('list-item')
export class ListItemController {
  constructor(private readonly listItemService: ListItemService) {}

  @Post()
  create(@Body() createListItemDto: CreateListItemDto) {
    return this.listItemService.create(createListItemDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.listItemService.findOne(id);
  }

  @Patch(':id/complete')
  complete(@Param('id') id: string, @Body() completeListItemDto: CompleteListItemDto) {
    return this.listItemService.complete(id, completeListItemDto);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateListItemDto: UpdateListItemDto) {
    return this.listItemService.update(+id, updateListItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.listItemService.remove(+id);
  }
}
