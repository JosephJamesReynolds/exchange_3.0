const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

async function deployTokenFixture() {
  const token = await ethers.deployContract("Token");

  return { token };
}

describe("Token", () => {
  let token;

  beforeEach(async () => {
    ({ token } = await loadFixture(deployTokenFixture));
  });

  it("Has correct name", async () => {
    const name = await token.name();

    console.log(await token.name());

    expect(name).to.equal("Reynolds Token");
  });
  it("Has correct symbol", async () => {
    const symbol = await token.symbol();

    expect(symbol).to.equal("RTK");
  });
  it("Has correct decimals", async () => {});
});
