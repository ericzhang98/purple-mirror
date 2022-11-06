// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  /*
  const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  const ONE_MINUTE_IN_SECS = 60;
  const unlockTime = currentTimestampInSeconds + ONE_MINUTE_IN_SECS;
  const lockedAmount = hre.ethers.utils.parseEther("0.0001");
  const Lock = await hre.ethers.getContractFactory("Lock");
  const lock = await Lock.deploy(unlockTime, { value: lockedAmount });
  await lock.deployed();
  console.log(
    `Lock with 0.0001 ETH and unlock timestamp ${unlockTime} deployed to ${lock.address}`
  );
  */
  const Dank = await hre.ethers.getContractFactory("Dank");
  const dank = await Dank.deploy();
  await dank.deployed();
  console.log(`deployed Dank smart contract to ${dank.address}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
