import { Injectable } from '@angular/core';
import { User } from './User';
import { users } from './UsersData';
import { LoggerService } from './logger.service';

@Injectable({
  providedIn: 'root',
})
  
export class UserService {
  private users: User[] = [];

  constructor(private logger: LoggerService) {
    this.users = users;
  }

  getUsers(): User[] {
    this.logger.write('get users')
    return this.users;
  }

  addUser(data: any) {
    this.logger.write('add user');

    this.users.push({
      name: data.userName,
      email: data.userEmail,
      phones: data.userPhones,
      id: new Date().getTime(),
    });
  }


}
