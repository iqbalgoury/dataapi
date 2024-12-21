const crypto = require('crypto');

function generateApiKey() {
    return crypto.randomBytes(32).toString('hex');
}

const apiKey = generateApiKey();
console.log(`Your API Key: ${apiKey}`);
