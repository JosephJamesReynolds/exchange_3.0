// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.28;

contract Token {
    string public name = "Reynolds Token";
    string public symbol = "RTK";
    uint8 public decimals = 18;
    uint256 public totalSupply = 20_000_000 * (10 ** decimals);
}