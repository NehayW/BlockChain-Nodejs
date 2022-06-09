const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const WangoesNFT = await hre.ethers.getContractFactory("WangoesNFT");
  const wangoes = await WangoesNFT.deploy();

  await wangoes.deployed();
  console.log("WangoesNFT deployed to:", wangoes.address);
  
  let txn = await wangoes.mintNFT();
  console.log(txn)
  await txn.wait();
  
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });