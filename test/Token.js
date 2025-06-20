const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

async function deployTokenFixture() {
  const token = await ethers.deployContract("Token");

  return { token };
}

const tokens = (n) => {
  return ethers.parseUnits(n.toString(), 18);
};

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
  it("Has correct decimals", async () => {
    const { token } = await loadFixture(deployTokenFixture);
    expect(await token.decimals()).to.equal(18);
  });
  it("Had correct total supply", async () => {
    const { token } = await loadFixture(deployTokenFixture);
    expect(await token.totalSupply()).to.equal(tokens("20000000"));
  });
});
