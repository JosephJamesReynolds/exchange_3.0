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

contract Exchange {
    address public feeAccount;
    uint256 public feePercent;

    constructor(address _feeAccount, uint256 _feePercent) {
        feeAccount = _feeAccount;
        feePercent = _feePercent;
    }
}
