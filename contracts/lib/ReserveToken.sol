pragma solidity ^0.4.11;

import "./SafeMath.sol";
import "./StandardToken.sol";

contract ReserveToken is StandardToken, SafeMath {
    address public minter;

    function ReserveToken() {
        minter = msg.sender;
    }

    function create(address account, uint amount) {
        require(msg.sender == minter);
        balances[account] = safeAdd(balances[account], amount);
        totalSupply = safeAdd(totalSupply, amount);
    }

    function destroy(address account, uint amount) {
        require(msg.sender == minter);
        require(balances[account] >= amount);
        balances[account] = safeSub(balances[account], amount);
        totalSupply = safeSub(totalSupply, amount);
    }
}
