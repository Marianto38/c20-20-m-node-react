const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const http = require('http'); // Módulo HTTP
const { Server } = require('socket.io'); // socket.io

const app = express();
const routeUser = require("./routes/routeUser");
const routeReview = require("./routes/routeReview");
const routeProfessions = require('./routes/routeProfessions');

// Middlewares
app.use(morgan("dev"));
app.use(express.json());
app.use(cookieParser());

// CORS con opciones específicas
app.use(cors({
  origin: 'http://localhost:5173', // Cambiaremos esto al dominio del cliente al desplegar
  credentials: true // Habilita el envío de cookies en solicitudes CORS
}));

// Rutas
app.use("/user", routeUser);
app.use('/professions', routeProfessions);
app.use("/reviews", routeReview);

// Crear servidor HTTP usando el módulo 'http'
const server = http.createServer(app);

// Iniciar socket.io con el servidor HTTP
const io = new Server(server, {
  cors: {
    origin: 'http://localhost:5173', // Cambiaremos esto al dominio del cliente al desplegar
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on('connection', (socket) => {
  console.log('Un usuario se ha conectado:', socket.id);

  socket.on('sendMessage', (data) => {
    io.emit('receiveMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('Un usuario se ha desconectado:', socket.id);
  });
});

module.exports = server;