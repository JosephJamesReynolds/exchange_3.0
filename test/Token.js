const { expect } = require("chai");
const { ethers } = require("hardhat")

describe("Token", () => {

    it("Has correct name", async () => {
    //    const Token = await ethers.getContractFactory("Token")
       const token = await ethers.deployContract("Token");
    //    const token = await Token.deploy()


       const name = await token.name()
       
       expect(name).to.equal("Reynolds Token")

    //    const symbol = await token.symbol()

    //    expect(symbol).to.equal("RTK");
       
    })
}) 