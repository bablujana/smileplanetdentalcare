const fs = require('fs');

// 1. Fix wrangler.toml
let wrangler = fs.readFileSync('backend/wrangler.toml', 'utf8');
if (!wrangler.includes('[vars]')) {
    wrangler += '\n[vars]\nADMIN_PASSWORD = "password123"\nADMIN_TOKEN = "admin_secret_token_123"\n';
    fs.writeFileSync('backend/wrangler.toml', wrangler);
}

// 2. Fix index.js
let backendCode = fs.readFileSync('backend/src/index.js', 'utf8');
backendCode = backendCode.replace(/if \(auth !== 'Bearer admin_secret_token_123'\)/g, 'if (auth !== `Bearer ${c.env.ADMIN_TOKEN}`)');
fs.writeFileSync('backend/src/index.js', backendCode);

console.log('Fixed auth configuration');
