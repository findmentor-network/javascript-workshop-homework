import { User } from '../user/user'
export class Room {
  name: string;
  members: User[]
  round: number
  constructor (name:string) {
    this.name = name
    this.members = []
    this.round = 1
  }

  static allRooms () {

  }

  join (user: User) {
    this.members.push(user)
    // If someone in the room
    if (this.members[0] === user) {
      return this
    }

    // If room empty
    const host = this.members[0]
    return `${host.name} is in the room`
  }

  amIHost (user: User) {
    // If User is the host
    if (this.members[0] === user) return true

    // If user not the host
    return false
  }
}
