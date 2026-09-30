const fs = require('fs');

let adminCode = fs.readFileSync('frontend/src/pages/Admin.jsx', 'utf8');

// Also, let's make sure the handleLogout function correctly clears the token
if (!adminCode.includes('localStorage.removeItem(\'adminToken\')')) {
    // Actually handleLogout just sets token to null and removes it
    console.log("Logout is likely fine, let's check it.");
}

