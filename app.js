const express = require("express");

const { auth } = require("express-oauth2-jwt-bearer");
// Importamos el Middleware Error Handler
const errorHandler = require("./middlewares/errorHandler");

// Configuracion middleware con el servidor de autorizacion
const autenticacion = auth({
    audience: "https://localhost:3000/api/libros",
    issuerBaseURL: "https://dev-utn-frc-iaew.auth0.com/",
    tokenSigningAlg: "RS256",
});

const app = express();
app.use(express.json());

// Importamos el Router de Libros
const librosRouter = require("./routes/libros");

app.use("/libros", autenticacion, librosRouter);

app.use(errorHandler);

app.listen(3000, () => {
  console.log("Servidor iniciado en el puerto 3000");
});




// const express = require('express');
// const app = express();
// app.use(express.json());

// //Se importa el router de libros
// const librosRouter = require('./routes/libros');

// //Se importa el middleware error handler
// const errorHandler = require('./middlewares/errorHandler');

// app.use('/libros', librosRouter);
// app.use(errorHandler);

// app.listen(3000, () => {
//     console.log('Servidor iniciado en el puerto 3000');
// });
