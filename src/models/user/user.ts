// import { Room } from '../room/room'

export class User {
  id: string;
  name: string;
  constructor (id: string, name: string) {
    this.id = id
    this.name = name
    User.allUsers = [...User.allUsers, this]
  }

  // For assign and return all users
  static allUsers: User[] = [];

  static all () {
    return User.allUsers
  }

  static get (id: string) {
  }

  static AddUserItself () {

  }
}
