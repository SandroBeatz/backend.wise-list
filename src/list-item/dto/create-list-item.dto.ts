import {IsString, IsUUID} from "class-validator";

export class CreateListItemDto {
    @IsString()
    title: string;

    @IsString()
    @IsUUID()
    listId: string
}
