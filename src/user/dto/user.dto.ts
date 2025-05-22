import {IsString, MinLength} from "class-validator";
import {Transform} from "class-transformer";
export class UserDto {
    
    @Transform(({value})=>{  //transform is use to add any custom condition
        if(value=="radhe") return "radhe shyam";
        return value;
    })
    @IsString()
    @MinLength(3)
    name:string;

    @IsString()
    type:string ;  
}