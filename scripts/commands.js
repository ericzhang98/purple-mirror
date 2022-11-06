const dotenv = require("dotenv");
dotenv.config();
const { API_KEY, PRIVATE_KEY } = process.env;

const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
const web3 = createAlchemyWeb3(
  `https://eth-goerli.alchemyapi.io/v2/${API_KEY}`
);

const { abi } = require("../artifacts/contracts/Dank.sol/Dank.json");
const CONTRACT_ADDRESS = "0xf002895B637B3273672EF8FC66CE3f274535bEa6";
const contract = new web3.eth.Contract(abi, CONTRACT_ADDRESS);

const MY_ADDRESS = "0xEEE8E33036447f59E64fe549E815F374F9c4cBAB";

const mint = async (address, tokenId) => {
  const data = contract.methods.mintDatShit(address, tokenId).encodeABI();

  const transaction = {
    to: CONTRACT_ADDRESS,
    gas: 1000000,
    data: data,
  };

  const signedTx = await web3.eth.accounts.signTransaction(
    transaction,
    PRIVATE_KEY
  );

  web3.eth
    .sendSignedTransaction(signedTx.rawTransaction, function (error, hash) {
      if (!error) {
        console.log("The hash of your transaction is: ", hash);
      } else {
        console.log(
          "Something went wrong while submitting your transaction:",
          error
        );
      }
    })
    .then((receipt) =>
      console.log(
        `Transaction finished: https://goerli.etherscan.io/tx/${receipt.transactionHash}`
      )
    );
  console.log("done");
};

mint(MY_ADDRESS, 69420);
