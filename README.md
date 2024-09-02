# blockchain-ransomware-protection
# Blockchain-based Ransomware Protection

Overview

This project is a Blockchain-based Ransomware Protection system that uses Ethereum and IPFS to securely back up and restore files. The system ensures that data is securely stored and can be restored even in the event of a ransomware attack.

 Features

- Immutable backups using Blockchain
- Decentralized storage with IPFS
- Data encryption to ensure secure storage
- Automated restoration process

 Installation

1. Clone the repository:

bash
git clone https://github.com/Cyberpradeep/blockchain-ransomware-protection.git
cd blockchain-ransomware-protection

Install Dependencies:
npm install

Deploy the smart contract:
truffle migrate --network rinkeby

Backup a file:
node scripts/backup.js

Restore a file:
node scripts/restore.js


