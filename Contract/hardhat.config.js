require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
    networks:{
      ropsten:{
        url:'https://eth-goerli.g.alchemy.com/v2/j_sDQmRUuBoeGMk9jgEGp_uvfdwE0bOD',
         accounts:['1f2dec4ff27ff08ff0e2360253fef7fc080adb2855e23380423d3b71f08d16d0']
    }
  }
}
//https://eth-goerli.g.alchemy.com/v2/j_sDQmRUuBoeGMk9jgEGp_uvfdwE0bOD