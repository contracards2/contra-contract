// SPDX-License-Identifier: Apache-2.0

/*
  ____ ___  _   _ _____ ____     _    
 / ___/ _ \| \ | |_   _|  _ \   / \   
| |  | | | |  \| | | | | |_) | / _ \  
| |__| |_| | |\  | | | |  _ < / ___ \ 
 \____\___/|_| \_| |_| |_| \_/_/   \_\
 
*/

pragma solidity ^0.8.9;

import "@thirdweb-dev/contracts/base/ERC721Drop.sol";

interface IERC721 {
    function ownerOf(uint256 tokenId) external view returns (address);
}

contract Contra is ERC721Drop {
    using TWStrings for uint256;

    string baseURI;

    constructor(
        string memory _name,
        string memory _symbol,
        address _royaltyRecipient,
        uint128 _royaltyBps,
        address _primarySaleRecipient,
        string memory _initBaseURI
    )
        ERC721Drop(
            _name,
            _symbol,
            _royaltyRecipient,
            _royaltyBps,
            _primarySaleRecipient
        )
    {
        setBaseURI(_initBaseURI);
    }

    function _startTokenId() internal view virtual override returns (uint256) {
        return 1;
    }

    function _baseURI() internal view virtual override returns (string memory) {
        return baseURI;
    }

    function setBaseURI(string memory _newBaseURI) public onlyOwner {
        baseURI = _newBaseURI;
    }

    function tokenURI(
        uint256 tokenId
    ) public view virtual override returns (string memory) {
        require(
            _exists(tokenId),
            "ERC721Metadata: URI query for nonexistent token"
        );

        string memory currentBaseURI = _baseURI();
        return
            bytes(currentBaseURI).length > 0
                ? string(abi.encodePacked(currentBaseURI, tokenId.toString()))
                : "";
    }
}

/*
  ____ _        _    ____  _   _    ___  _____   ____  _____ ____ _____ _   _ ____  
 / ___| |      / \  / ___|| | | |  / _ \|  ___| |  _ \| ____/ ___| ____| \ | / ___| 
| |   | |     / _ \ \___ \| |_| | | | | | |_    | | | |  _|| |  _|  _| |  \| \___ \ 
| |___| |___ / ___ \ ___) |  _  | | |_| |  _|   | |_| | |__| |_| | |___| |\  |___) |
 \____|_____/_/   \_\____/|_| |_|  \___/|_|     |____/|_____\____|_____|_| \_|____/ 
                                                                                     
 */
