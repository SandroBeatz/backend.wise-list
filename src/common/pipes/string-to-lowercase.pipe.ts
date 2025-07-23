import {Injectable, PipeTransform} from "@nestjs/common";

@Injectable()
export class StringToLowercasePipe implements PipeTransform {
    transform(value: string): string {
        if (typeof value !== 'string') {
            return value; // If the value is not a string, return it as is
        }
        return value.toLowerCase();
    }
}
