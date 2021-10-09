import { isWithinCurrentTimeLimit } from '../helpers';

describe('is Within Current Time Limit Test',()=>{

  test('within correct limit', () => {
    expect(isWithinCurrentTimeLimit(new Date().getTime() / 1000, 3600)).toBeTruthy();
  });

  test('not within limit', () => {
    expect(isWithinCurrentTimeLimit(new Date().getTime() / 1000 - 3700, 3600)).toBeFalsy();
  });

})
