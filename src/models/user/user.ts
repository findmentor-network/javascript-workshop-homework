import { Room } from '../room/room'

export class User {
  socketId: string;
  name: string;
  room: Room;
  constructor (socketId: string, name: string) {
    this.socketId = socketId
    this.name = name
    this.room = {}
  }

  static all () {

  }

  static get (id: string) {

  }

  getRoom () {
    return this.room
  }
}
