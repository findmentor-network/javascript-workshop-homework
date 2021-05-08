/* eslint-disable no-undef */
import { Room } from './room';

describe('[room.ts]', () => {
  it('creates instance of room', () => {
    const newRoom = new Room();
    expect(newRoom instanceof Room).toBe(true);
  });
});
