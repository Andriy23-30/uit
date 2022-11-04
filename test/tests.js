const assert = require('assert');
const { expect } = require('chai');
const { add } = require('../js/main-test')

describe('the add function', () => {
    it('should add 2 numbers together', () => {
      const result = add(2,7);
      assert.equal(result, 9);
      // expect(result).to.be.eq(5);
    });
});