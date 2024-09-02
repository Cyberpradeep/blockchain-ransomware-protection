const crypto = require('crypto');

const decryptData = (encryptedData, password) => {
    const decipher = crypto.createDecipher('aes-256-ctr', password);
    let decrypted = decipher.update(encryptedData, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
};

module.exports = { decryptData };

