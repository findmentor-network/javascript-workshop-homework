/* eslint-disable no-undef */
import { Room } from './room'

describe('[room.ts]', () => {
  it('creates instance of room', () => {
    const roomName = 'Sample Room Name'
    const newRoom = new Room(roomName)
    expect(newRoom instanceof Room).toBe(true)
  })
})
