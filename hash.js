const bcrypt = require('bcrypt'); // Si bcrypt no funciona, usa 'bcryptjs'

const password = 'javier2021'; // Reemplaza con la contraseña que quieres cifrar

bcrypt.hash(password, 10, (err, hash) => {
  if (err) {
    console.error('Error al generar el hash:', err);
  } else {
    console.log('Contraseña cifrada:', hash);
  }
});
