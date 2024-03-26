const fs = require('fs');
const crypto = require('crypto');

// Function to generate a random key with 32 bytes length
function generateRandomKey() {
    return crypto.randomBytes(32).toString('hex');
}

// Generate random keys
const appKeysKey = generateRandomKey();
const apiTokenSaltKey = generateRandomKey();
const adminJwtSecretKey = generateRandomKey();

// Format keys for .env file
const envContent = `APP_KEYS=["${appKeysKey}"]\n` +
                   `API_TOKEN_SALT=["${apiTokenSaltKey}"]\n` +
                   `ADMIN_JWT_SECRET=["${adminJwtSecretKey}"]\n`;

// Append keys to .env file
fs.appendFileSync('.env', envContent);

console.log('Random app keys generated and appended to .env file.');
