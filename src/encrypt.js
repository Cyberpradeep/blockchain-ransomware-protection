const crypto = require('crypto');

const encryptData = (data, password) => {
    const cipher = crypto.createCipher('aes-256-ctr', password);
    let encrypted = cipher.update(data, 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
};

module.exports = { encryptData };

