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
  //   beforeEach(async () => {
  //     ({ token, deployer, receiver, exchange, user1, user2 } =
  //       await loadFixture(deployTokenFixture));
  //   });
  describe("Deployment", () => {
    it("", async () => {
      await loadFixture(deployExchangeFixture);
    });
  });
});
