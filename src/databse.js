const mongoose = require ('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/proyect',{ // cambiar localhost por 127.0.0.1 hace que mongodb pueda conectarse 
    useNewUrlParser :true
})
    .then(db => console.log(`DB is connected`))
    .catch(err => console.error(err));