const {
  loadFixture,
} = require("@nomicfoundation/hardhat-toolbox/network-helpers");
const { expect } = require("chai");
const { ethers } = require("hardhat");

const { deployExchangeFixture } = require("./helpers/ExchangeFixtures.js");

const tokens = (n) => {
  return ethers.parseUnits(n.toString(), 18);
};

describe("Exchange", () => {
  let exchange;
  let accounts;
  const FEE_PERCENT = 1;

  beforeEach(async () => {
    ({ exchange, accounts } = await loadFixture(deployExchangeFixture));
  });
  describe("Deployment", () => {
    it("Tracks the fee account", async () => {
      expect(await exchange.feeAccount()).to.equal(accounts.feeAccount.address);
    });

    it("Tracks the fee account", async () => {
      expect(await exchange.feePercent()).to.equal(FEE_PERCENT);
    });
  });
});
