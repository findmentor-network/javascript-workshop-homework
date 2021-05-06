/* eslint-disable no-undef */
import { User } from './user'

describe('[user.ts]', () => {
  it('creates instance of user', () => {
    const user = new User('sadi', '1')
    const user2 = new User('kaan', '1')
    expect(user instanceof User).toBe(true)
    expect(User.all()).toStrictEqual([user, user2])
  })
})
