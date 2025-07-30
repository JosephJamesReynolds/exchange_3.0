// SPDX-License-Identifier: UNLICENCED
pragma solidity ^0.8.28;

// Deposit Tokens
// Withdraw Tokens
// Check Balances
// Make Orders
// Cancel Orders
// Fill Orders
// Charge Fees
// Track Account Activity

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

import { Token } from "./Token.sol";


contract Exchange {
    address public feeAccount;
    uint256 public feePercent;

    mapping(address => mapping(address => uint256)) public tokens;

    event Deposit(address token, address user, uint256 amount, uint256 balance);

    constructor(address _feeAccount, uint256 _feePercent) {
        feeAccount = _feeAccount;
        feePercent = _feePercent;
    }

    // Deposit Tokens
    function depositToken(address _token, uint256 _amount) public {
        require(
            IERC20(_token).transferFrom(msg.sender, address(this), amount), "Transfer Failed"
        );

        tokens[_token][msg.sender]
    }
}
