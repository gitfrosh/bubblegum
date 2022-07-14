require("@nomiclabs/hardhat-ethers");

const dotenv = require("dotenv");

dotenv.config();

module.exports = {
  solidity: '0.8.9',
  networks: {
    ropsten: {
      url: process.env.INFURA_KEY,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
