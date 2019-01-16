import timeToGo from 'utils/timeToGo';
describe('time to go', () => {
  it('get the right time difference ', () => {
    expect(timeToGo("2019-01-15T02:28:00.000Z","2019-01-16T03:29:00.000Z")).toBe('1D 1H 1M');
  });
});
