import nodeAPI from '..';
import highlightWords from '../../lib/highlightWords';

describe('node api', () => {
  it('should be the same as the highlightWords function', () => {
    expect.assertions(1);
    expect(nodeAPI).toStrictEqual(highlightWords);
  });
});
