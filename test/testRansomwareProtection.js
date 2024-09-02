const RansomwareProtection = artifacts.require("RansomwareProtection");

contract("RansomwareProtection", accounts => {
    it("should store a new backup", async () => {
        const instance = await RansomwareProtection.deployed();
        await instance.addBackup("fileHash123", "ipfsHash123", { from: accounts[0] });

        const backup = await instance.backups("fileHash123");
        assert.equal(backup.ipfsHash, "ipfsHash123", "IPFS hash was not stored correctly");
    });

    it("should verify the backup", async () => {
        const instance = await RansomwareProtection.deployed();
        const isValid = await instance.verifyBackup("fileHash123");
        assert.equal(isValid, true, "Backup verification failed");
    });
});

