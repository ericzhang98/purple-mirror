// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Dank is ERC721, Ownable {
    constructor() ERC721("Dank", "DDDD") {
      _safeMint(0xEEE8E33036447f59E64fe549E815F374F9c4cBAB, 69);
    }

    function mintDatShit(address _to, uint256 _tokenId) public onlyOwner {
      _safeMint(_to, _tokenId);
    }
}