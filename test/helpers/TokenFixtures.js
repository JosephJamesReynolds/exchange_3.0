async function deployTokenFixture() {
  const token = await ethers.deployContract("Token", [
    "Reynolds Token",
    "RTK",
    "20000000",
  ]);

  const signers = await ethers.getSigners();
  const deployer = signers[0];
  const receiver = signers[1];
  const exchange = signers[2];
  const user1 = signers[3];
  const user2 = signers[4];

  return { token, deployer, receiver, exchange, user1, user2 };
}

module.exports = {
  deployTokenFixture,
};
