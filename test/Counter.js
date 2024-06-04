const { expect } = require("chai");

//define the test suite for Counter contract

describe("Counter", function () {
  let counter;
  // New Counter contract instance before each test case

  beforeEach(async function () {
    const Counter = await ethers.getContractFactory("Counter");
    counter = await Counter.deploy();
    await counter.waitForDeployment();
  });

  it("Count should start at 0", async function () {
    expect(await counter.getCount()).to.equal(0);
  });

  it("Function should increment by 1", async function () {
    await counter.increaseCount();
    expect(await counter.getCount()).to.equal(1);
  });

  it("Function should decrement by 1", async function () {
    await counter.increaseCount();
    await counter.decreaseCount();
    expect(await counter.getCount()).to.equal(0);
  });

  it("Cant go below O", async function () {
    await expect(counter.decreaseCount()).to.be.revertedWith(
      "cant be negative"
    );
  });
});
