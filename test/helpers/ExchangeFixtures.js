const { ethers } = require("hardhat");

async function deployExchangeFixture() {
  const Exchange = await ethers.deployContract("Exchange", [
    feeAccount,
    FEE_PERCENT,
  ]);

  const accounts = await ethers.getSigners();
  const deployer = accounts[0];
  const feeAccount = accounts[1]; // Fee Account

  const FEE_PERCENT = 1;
}

module.exports = {
  deployExchangeFixture,
};
