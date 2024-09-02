const ipfsClient = require('ipfs-http-client');
const fs = require('fs');
const { encryptData } = require('./encrypt');

const ipfs = ipfsClient.create({ host: 'ipfs.infura.io', port: '5001', protocol: 'https' });

const uploadToIPFS = async (filePath, password) => {
    const data = fs.readFileSync(filePath, 'utf8');
    const encryptedData = encryptData(data, password);
    const fileBuffer = Buffer.from(encryptedData, 'utf8');

    const ipfsResult = await ipfs.add(fileBuffer);
    return ipfsResult.path; // IPFS CID
};

module.exports = { uploadToIPFS };

