import { User } from './user-details';

describe('UserDetails', () => {
  it('should create an instance', () => {
    expect(new User('Jane',45,'01/01/1987',10000,'Farmer',0)).toBeTruthy();
  });
});
