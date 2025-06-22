async function deployTokenFixture() {
  const token = await ethers.deployContract("Token", [
    "Reynolds Token",
    "RTK",
    "20000000",
  ]);

  const signers = await ethers.getSigners();
  const deployer = signers[0];

  return { token, deployer };
}

module.exports = {
  deployTokenFixture,
};
