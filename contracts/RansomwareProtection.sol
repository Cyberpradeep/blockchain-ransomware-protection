// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract RansomwareProtection {
    struct Backup {
        address owner;
        string ipfsHash;
        string fileHash;
        uint timestamp;
    }

    mapping(string => Backup) public backups;

    function addBackup(string memory _fileHash, string memory _ipfsHash) public {
        backups[_fileHash] = Backup({
            owner: msg.sender,
            ipfsHash: _ipfsHash,
            fileHash: _fileHash,
            timestamp: block.timestamp
        });
    }

    function verifyBackup(string memory _fileHash) public view returns (bool) {
        return keccak256(abi.encodePacked(backups[_fileHash].fileHash)) == keccak256(abi.encodePacked(_fileHash));
    }
}

