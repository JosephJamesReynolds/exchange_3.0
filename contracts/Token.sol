// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.28;

contract Token {
    string public name = "Reynolds Token";
    string public symbol = "RTK";
    uint8 public decimals = 18;
    uint256 public totalSupply = 20_000_000 * (10 ** decimals);

constructor(string memory name_, string memory symbol_, uint8 decimals_, uint256 totalSupply_) {
    name = name_;
    symbol = symbol_;
    decimals = decimals_;
    totalSupply = totalSupply_;
}

}