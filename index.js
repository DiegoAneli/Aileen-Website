const express =require('express'); //import di express (framework di NODE che permette di scrivere codice di sever in maniera semplice)
const app = express(); //
const morgan = require('morgan');//import di morgan, modulo che permette di di visualizzare messaggi in cosole (debug)

//setteggio 
app.set('port',3000); //(chiave,valore) assegno alla chiava port il valore 3000 (ossia sto indicando che voglio che la app ascolti nella porta 3000)

//middleware
app.use(morgan('dev')); // 
app.use(express.urlencoded({extended:false})); // permette di capire il formato dei form quando arrivano
app.use(express.json()); //permette al sever di capire le richieste in formato json qunado arrivano

//routes 
app.use(require("./src/routes/index")); //importa il modulo index che si trova in routes
app.use("/api/persone",require("./src/routes/persone"));

//static files

//init del server
app.listen(app.get('port'), ()=>{
    console.log("Server in ascolto sulla porta "+ app.get('port'));
}); //