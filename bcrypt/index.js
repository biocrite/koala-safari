//llamar al módulo
const bcryptjs = require ("bcrypt");

//contraseña
let contrasena = "koala18";

//encriptar la contraseña
let hash = bcryptjs.hashSync(contrasena, 8);
console.log(hash);

//prueba
let passwordLogueo = "koala18";
let comparacion = bcryptjs.compareSync(passwordLogueo, hash);
console.log(comparacion);