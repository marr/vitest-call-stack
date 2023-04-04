function test() {
  console.log('here');
}

describe('should show the call stack', () => {
  it('calls func', () => {
    test();
    expect(false).toBeTruthy();
  });
});