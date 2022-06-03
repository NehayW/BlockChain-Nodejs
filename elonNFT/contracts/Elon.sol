// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";


contract ElonNFT is ERC721URIStorage {
   using Counters for Counters.Counter;
   Counters.Counter private _tokenIds;
 
   constructor() ERC721("ElonMusk", "ELON") {}
 
   function mintNFT()
       public
       returns (uint256)
       {
           _tokenIds.increment();
           uint256 newItemId = _tokenIds.current();
           _mint(msg.sender, newItemId);
           // json data formate
           // {"name":"Elon Musk","description":"Making inter planetory travel possible and pushing the boundaries for mankind.","image":"https://64.media.tumblr.com/242f308aee595552a0898e11b4bfb9a3/tumblr_pe1d49XUHB1tsqz3b_1280.jpg","attributes":[{"trait_type":"Zodiac","value":"Cancer"},{"trait_type":"Height","value":"6'1"},{"trait_type":"Personality Type","value":"INTJ"}]}
           _setTokenURI(newItemId, "https://jsonkeeper.com/b/JJJS");
           console.log("The NFT ID %s has been minted to %s", newItemId, msg.sender);
           return newItemId;
       }
}