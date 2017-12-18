const { expect } = require('chai');
const adder = require('./adder');

describe("day 1 adder", () => {
  it("can read and add up ones", () => {
    expect(adder.run("1111")).to.equal(4);
  });
})
