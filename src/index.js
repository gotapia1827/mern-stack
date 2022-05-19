const express = require('express');
const morgan = require('morgan');
const app = express();
const path = require('express');


// Configuracion
app.set('port', process.env.PORT || 3000);

// Middlewares
app.use(morgan('dev'));
app.use(express.json());
// Rutas
app.use('/api/task', require('./routes/task.routes'));
// Static files
console.log(__dirname)
//app.use(express.static())
// Inicia Servidor
app.listen(app.get('port'), () =>{
    console.log(`Server on port ${app.get('port')}`);
});