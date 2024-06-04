// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.19;

contract Counter {
    uint public count;

    function getCount() public view returns(uint) {
        return count;
    }

    function increaseCount() public {
        count +=1;
    }

    function decreaseCount() public {
        require(count > 0, "cant be negative");
        count -=1;
    }
}

