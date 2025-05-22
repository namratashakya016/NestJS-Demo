import { Injectable } from '@nestjs/common';
import { error } from 'console';
import { UserDto } from './dto/user.dto';

@Injectable()
export class UserService {
    private users=[
        {
            'id':1,
            'name':'Radhe',
            'type':'special'
        },
        {
            'id':2,
            'name':'Radhe sh',
            'type':'common'
        },
        {
            'id':3,
            'name':'Nimma',
            'type':'common'
        }
    ];    
    getAllUser(){
        return this.users;
    }

    getSingleUser(id : number){
        const user= this.users.find((user)=> user.id === id );
        if(!user){
            throw new Error("user not found !");
        }
        return user;
    }

    addUser(user: UserDto){
       let id=Date.now();
       this.users.push({
        id,
        ...user
       });

       return this.getSingleUser(id);

    }
}
