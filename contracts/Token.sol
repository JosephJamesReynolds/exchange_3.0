// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.28;

contract Token {
    string public name;
    string public symbol;
    uint8 public decimals = 18;
    uint256 public totalSupply;

    mapping(address => uint256) public balanceOf;

    constructor(string memory name_, string memory symbol_, uint256 totalSupply_) {
        name = name_;
        symbol = symbol_;
        totalSupply = totalSupply_ * (10 ** decimals);
        balanceOf[msg.sender] = totalSupply;
    }

}