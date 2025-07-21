import {Injectable, NotFoundException} from '@nestjs/common';
import {CreateListDto} from './dto/create-list.dto';
import {UpdateListDto} from './dto/update-list.dto';
import {PrismaService} from "../prisma/prisma.service";
import {List} from "@prisma/client";

@Injectable()
export class ListService {
  constructor(
    private readonly prismaService: PrismaService,
  ) {
  }

  async create(createListDto: CreateListDto): Promise<List> {
    return this.prismaService.list.create({
      data: createListDto
    });
  }

  async findAll() {
    return this.prismaService.list.findMany({
        include: {
            items: true
        }
    });
  }

  async findOne(id: string) {
    const list = await this.prismaService.list.findUnique({
      where: { id }
    });

    if(!list) throw new NotFoundException(`List with id ${id} not found`);

    return list
  }

  async update(id: string, updateListDto: UpdateListDto) {
    const list = await this.findOne(id);

    return this.prismaService.list.update({
      where: { id: list.id },
      data: updateListDto
    });
  }

  async remove(id: string) {
    const list = await this.findOne(id);

    return this.prismaService.list.delete({
      where: { id: list.id }
    });
  }
}
