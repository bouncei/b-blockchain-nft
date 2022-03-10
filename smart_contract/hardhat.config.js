require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/cZTxqnlB02OiRZQYCVIuj3U3LR20_MbV',
      accounts: [
        'fc47f40a84f71488a356a43caa05512743609e1df51e866a4d196496f5db92a7',
      ],

    }
  }
};
