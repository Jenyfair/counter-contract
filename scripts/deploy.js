const hre = require("hardhat");

async function main() {
  //deployment of contract
  const Counter = await hre.ethers.getContractFactory("Counter");
  const counter = await Counter.deploy();
  const contratAddress = await counter.getAddress();
  console.log("Counter contract has been deployed to:", contratAddress);
  //get transaction receipt
  const receipt = await counter.waitForDeployment();
  const deployer = await receipt.runner.getAddress();
  console.log("Deployed by:", deployer);
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
