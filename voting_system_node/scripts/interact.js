const { ethers } = require("hardhat");

const API_KEY = process.env.API_KEY; //get from alchemy
const CONTRACT = process.env.CONTRACT; //deployed contract address
const PRIVATE_KEY = process.env.PRIVATE_KEY; //metamask

const voting = require('../artifacts/contracts/Voting.sol/Voting.json');
// provider - Alchemy
const alchemyProvider = new ethers.providers.AlchemyProvider(network="rinkeby", API_KEY);

// signer - you
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

// contract instance
const vote = new ethers.Contract(CONTRACT, voting.abi, signer);
module.exports = {contract : vote};

