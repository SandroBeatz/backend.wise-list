import {Injectable} from '@nestjs/common';
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

  findAll() {
    return `This action returns all list`;
  }

  findOne(id: number) {
    return `This action returns a #${id} list`;
  }

  update(id: number, updateListDto: UpdateListDto) {
    return `This action updates a #${id} list`;
  }

  remove(id: number) {
    return `This action removes a #${id} list`;
  }
}
