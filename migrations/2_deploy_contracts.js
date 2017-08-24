var TokenExchange = artifacts.require("./TokenExchange.sol");

module.exports = function(deployer) {
    deployer.deploy(TokenExchange);
};
