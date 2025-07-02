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
  let deployer;
  const NAME = "Reynolds Token";
  const SYMBOL = "RTK";
  const DECIMALS = 18;
  const TOTALSUPPLY = "20000000";

  beforeEach(async () => {
    ({ token, deployer, receiver, exchange, user1, user2 } =
      await loadFixture(deployTokenFixture));
  });
  describe("Deployment", () => {
    it("Has correct name", async () => {
      expect(await token.name()).to.equal(NAME);
    });
    it("Has correct symbol", async () => {
      expect(await token.symbol()).to.equal(SYMBOL);
    });
    it("Has correct decimals", async () => {
      expect(await token.decimals()).to.equal(DECIMALS);
    });
    it("Has correct total supply", async () => {
      expect(await token.totalSupply()).to.equal(tokens(TOTALSUPPLY));
    });
    it("Assigns total supply to deployer", async () => {
      expect(await token.balanceOf(deployer.address)).to.equal(
        tokens(TOTALSUPPLY),
      );
    });
  });
  describe("Transfer", () => {
    it("Successfully emits transfer", async () => {
      const amount = tokens("100");
      await expect(token.transfer(receiver.address, amount))
        .to.emit(token, "Transfer")
        .withArgs(deployer.address, receiver.address, amount);
    });
    describe("Failure", () => {
      it("Rejects transfering to wrong address", async () => {
        const amount = tokens("100");
        const invalidAddress = "0x0000000000000000000000000000000000000000";
        await expect(token.transfer(invalidAddress, amount)).to.revertedWith(
          "Transfer to zero address",
        );
      });
      it("Rejects insufficient balances", async () => {
        const invalidAmount = tokens("100000000");
        await expect(
          token.transfer(receiver.address, invalidAmount),
        ).to.revertedWith("Insufficient Balance");
      });
    });
  });
  describe("Approving Tokens", () => {
    it("Allows approval for multiple spenders", async () => {
      await token.connect(deployer).approve(exchange.address, tokens("1000"));
      await token.connect(user1).approve(user2.address, tokens("500"));

      expect(
        await token.allowance(deployer.address, exchange.address),
      ).to.equal(tokens("1000"));
      expect(await token.allowance(user1.address, user2.address)).to.equal(
        tokens("500"),
      );
    });
    describe("Failure", () => {
      it("Rejects approval for multiple spenders", async () => {
        const 
      })
    }
  });
});
