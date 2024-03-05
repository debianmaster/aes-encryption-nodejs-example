const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');

const app = express();
const port = 8080;

app.use(bodyParser.json());

// Encryption function
app.post('/encrypt', (req, res) => {
    const { data, key, iv } = req.body;
    const decipherKey = Buffer.from(key, 'hex');
    const decipherIv = Buffer.from(iv, 'hex');

    const cipher = crypto.createCipheriv('aes-256-cbc', decipherKey, decipherIv);
    let encryptedData = cipher.update(data, 'utf8', 'hex');
    encryptedData += cipher.final('hex');

    res.json({
        encrypted_data: encryptedData,
        key: key,
        iv: iv,
    });
});

// Decryption function
app.post('/decrypt', (req, res) => {
    const { encrypted_data, key, iv } = req.body;
    const decipherKey = Buffer.from(key, 'hex');
    const decipherIv = Buffer.from(iv, 'hex');

    const decipher = crypto.createDecipheriv('aes-256-cbc', decipherKey, decipherIv);
    let decryptedData = decipher.update(encrypted_data, 'hex', 'utf8');
    decryptedData += decipher.final('utf8');

    res.json({
        decrypted_data: decryptedData,
    });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
