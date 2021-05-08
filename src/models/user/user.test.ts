/* eslint-disable no-undef */
import { User } from './user';

describe('[user.ts]', () => {
  it('creates instance of user', () => {
    const user = new User();
    expect(user instanceof User).toBe(true);
  });
});
