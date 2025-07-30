const { ethers } = require("hardhat");

async function deployExchangeFixture() {
  const accounts = await ethers.getSigners();
  const deployer = accounts[0];
  const feeAccount = accounts[1]; // Fee Account

  const FEE_PERCENT = 1;
  const exchange = await ethers.deployContract("Exchange", [
    feeAccount.address,
    FEE_PERCENT,
  ]);

  return { exchange, accounts: { deployer, feeAccount } };
}

module.exports = {
  deployExchangeFixture,
};
