const fs = require('fs');
const { restoreFile } = require('../src/blockchainClient');

const main = async () => {
    const fileHash = 'your-file-hash';
    const password = 'your-encryption-password';

    await restoreFile(fileHash, password);
    console.log('File restored successfully.');
};

main();

