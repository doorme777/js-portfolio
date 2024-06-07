const fs = require('fs');

fs.writeFile('./.env', `API_KEY=${process.env.API_KEY}\n`, 'utf8', (err) => {
  if (err) {
    console.error('Error al escribir el archivo:', err);
  } else {
    console.log('Archivo .env creado con éxito');
  }
});
