// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Bubblegum is ERC20, ERC20Burnable, Ownable {
    // Essentially, we created constructor function that is called when the smart
    // contract is first deployed. Within the constructor, we want two arguments
    // from the user - _name and _symbol which specify the name and symbol of our
    // cryptocurrency. Eg. name = Ethereum, symbol = ETH.
    constructor() ERC20("Bubblegum", "BBB") {
        // Since you as the developer want to receive some tokens when
        // you deploy this contract, we call the _mint
        // function to mint some tokens to msg.sender.
        _mint(msg.sender, 10 * 10**18);
    }

    function mint(address to, uint256 amount) external {
        _mint(to, amount);
    }
}
