var TokenExchange = artifacts.require("./TokenExchange.sol");

module.exports = function(deployer) {
    deployer.deploy(
        TokenExchange,
        0x71544d4D42dAAb49D9F634940d3164be25ba03Cc, // admin
        0x71544d4D42dAAb49D9F634940d3164be25ba03Cc, // fee account
        // Rest of settings is taken from production
        // https://etherscan.io/address/0x8d12a197cb00d4747a1fe03395095ce2a5cc6819#readContract
        0x0000000000000000000000000000000000000000, // levels account
        0, // fee make
        3000000000000000, // fee take
        0 // fee rebate
    );
};
