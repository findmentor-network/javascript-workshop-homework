import { User } from '../user/user'
export class Room {
  name: string;
  members: User[]

  constructor (name:string) {
    this.name = name
    this.members = []
  }

  static allRooms () {

  }

  join (user:User) {
    // If someone in the room
    if (this.members.length === 0) return this

    // If room empty
    const host = this.members[0]
    return `${host.name} is in the room`
  }
}
