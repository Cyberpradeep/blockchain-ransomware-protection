const RansomwareProtection = artifacts.require("RansomwareProtection");

module.exports = function(deployer) {
  deployer.deploy(RansomwareProtection);
};

