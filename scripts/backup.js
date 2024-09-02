const fs = require('fs');
const { encryptData, uploadToIPFS, storeBackupOnBlockchain } = require('../src/blockchainClient');

const main = async () => {
    const filePath = './path-to-your-file.txt';
    const password = 'your-encryption-password';
    
    const ipfsHash = await uploadToIPFS(filePath, password);
    const fileHash = encryptData(filePath, password);
    
    await storeBackupOnBlockchain(fileHash, ipfsHash);
    console.log(`Backup complete: IPFS Hash = ${ipfsHash}, File Hash = ${fileHash}`);
};

main();

