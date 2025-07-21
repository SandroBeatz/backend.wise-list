import {Injectable, NotFoundException} from '@nestjs/common';
import { CreateListItemDto } from './dto/create-list-item.dto';
import { UpdateListItemDto } from './dto/update-list-item.dto';
import {PrismaService} from "../prisma/prisma.service";
import {ListService} from "../list/list.service";
import {CompleteListItemDto} from "./dto/complete-list-item.dto";

@Injectable()
export class ListItemService {
  constructor(
      private readonly prismaService: PrismaService,
      private readonly listService: ListService
  ) {
  }

  async create(createListItemDto: CreateListItemDto) {
    await this.listService.findOne(createListItemDto.listId);
    return this.prismaService.listItem.create({
      data: createListItemDto
    });
  }

  async findOne(id: string) {
    const listItem = await this.prismaService.listItem.findUnique({
      where: { id }
    });

    if (!listItem) {
      throw new NotFoundException(`List item with id ${id} not found`);
    }

    return listItem
  }

  async complete(id: string, completeListItemDto: CompleteListItemDto) {
    const listItem = await this.findOne(id);

    return this.prismaService.listItem.update({
        where: { id: listItem.id },
        data: {
          isCompleted: completeListItemDto.isCompleted,
        }
    })
  }

  update(id: number, updateListItemDto: UpdateListItemDto) {
    return `This action updates a #${id} listItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} listItem`;
  }
}
