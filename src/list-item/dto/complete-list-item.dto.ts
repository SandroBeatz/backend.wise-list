import {IsBoolean, IsNotEmpty} from "class-validator";

export class CompleteListItemDto {
    @IsNotEmpty()
    @IsBoolean()
    isCompleted: boolean;
}
