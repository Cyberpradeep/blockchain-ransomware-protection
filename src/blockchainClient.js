const Web3 = require('web3');
const { encryptData, decryptData } = require('./encrypt');
const { uploadToIPFS } = require('./ipfsClient');

const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID"));
const contractAddress = "YOUR_CONTRACT_ADDRESS";
const contractABI = [/* ABI of your smart contract */];
const ransomwareProtection = new web3.eth.Contract(contractABI, contractAddress);

const storeBackupOnBlockchain = async (fileHash, ipfsHash) => {
    const accounts = await web3.eth.getAccounts();
    await ransomwareProtection.methods.addBackup(fileHash, ipfsHash)
        .send({ from: accounts[0] });
};

const restoreFile = async (fileHash, password) => {
    const backup = await ransomwareProtection.methods.backups(fileHash).call();
    if (!backup) {
        console.log('No backup found.');
        return;
    }

    const fileBuffer = await ipfs.cat(backup.ipfsHash);
    const encryptedData = fileBuffer.toString('utf8');
    const decryptedData = decryptData(encryptedData, password);

    fs.writeFileSync('./restored-file.txt', decryptedData, 'utf8');
};

module.exports = { storeBackupOnBlockchain, restoreFile };

