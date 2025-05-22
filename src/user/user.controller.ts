import { Controller, Get, Post, Param, NotFoundException, Body,
     ParseIntPipe, ValidationPipe, Req,Headers, 
     Query} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';

@Controller('user') // this is decorator
export class UserController {
    constructor (private readonly userService: UserService){     
    }

    @Get()
    getAllUser(@Req() request:Request,
               @Headers() header:Headers,
               @Query() query: Record<string, string>  // Capture all query parameters as an object {a:a,b:b}
            ) {
            //   console.log('Request:', request);
            //   console.log('Headers:', header);
            //   console.log('Query Parameters:', query); 
        return this.userService.getAllUser();
    }

    @Get(':id')
    getSingleUser(@Param('id', ParseIntPipe) id: number){ // pipe is use for transform data and validate like new ValidationPipe
        try {
            return this.userService.getSingleUser(id);            
        } catch (error) {
            throw new NotFoundException(error.message);
        }
    }

    @Post()
    addUser(@Body(new ValidationPipe({ transform: true })) user: UserDto){  // Dto is a class or interface which tell us all attribute of an entity like user,post
        return this.userService.addUser(user);
    }

}
/*
getAllUser - get all user
getSingleUser - get single user
*/
