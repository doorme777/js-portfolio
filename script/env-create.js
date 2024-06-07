const fs = require('fs');

fs.writeFile('./.env', `API_KEY=${process.env.API_KEY}\n`);
