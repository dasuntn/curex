import { searchFilter } from "../helpers";

const testData = [{name: 'test1'},{name: 'test2'}];
const testSearchParams = ['name'];

describe('Search Filter Test',()=>{

  test('emptyText', () => {
    expect(searchFilter(testData, testSearchParams, '')).toEqual(testData)
  });

  test('mismatch', () => {
    expect(searchFilter(testData, testSearchParams, 'w')).toEqual([])
  });

  test('match', () => {
    expect(searchFilter(testData,testSearchParams,'test1')).toEqual([{name :'test1'}])
  });

})
