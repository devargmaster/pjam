const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 5000;

// Conexión a MongoDB
mongoose.connect('mongodb://mongodb:27017/pjam', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB conectado'))
.catch(err => console.error('Error al conectar a MongoDB', err));

app.get('/', (req, res) => {
  res.send('¡Bienvenido al backend de la aplicación MERN!');
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

