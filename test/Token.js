const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

const { deployTokenFixture } = require("./helpers/TokenFixtures.js");

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
  it("Has correct total supply", async () => {
    const { token } = await loadFixture(deployTokenFixture);
    expect(await token.totalSupply()).to.equal(tokens("20000000"));
  });
  it("Assigns total supply to deployer", async () => {
    const { token, deployer } = await loadFixture(deployTokenFixture);
    expect(await token.balanceOf(deployer.address)).to.equal(
      tokens("20000000")
    );
  });
});
