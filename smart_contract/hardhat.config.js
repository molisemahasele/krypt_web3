//https://eth-goerli.g.alchemy.com/v2/1R6lHURAv18YQEWBV51ONpfCYWvXOmdl

require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/1R6lHURAv18YQEWBV51ONpfCYWvXOmdl',
      accounts: ['19ca4219bc4b1ff3d51c653504aa04f75d7070ca86cf7f8907327f72a5786aae']
    }
  }
};
