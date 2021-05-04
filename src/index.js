const express =require('express'); //import di express (framework di NODE che permette di scrivere codice di sever in maniera semplice)
const app = express(); //
const morgan = require('morgan');//import di morgan, modulo che permette di di visualizzare messaggi in cosole (debug)
const path=require('path');

//setteggio 
app.set('port',3000); //(chiave,valore) assegno alla chiava port il valore 3000 (ossia sto indicando che voglio che la app ascolti nella porta 3000)
app.set('views',path.join(__dirname,"views"));
app.set('partials',path.join(__dirname,"views/partials"));
app.engine('html',require('ejs').renderFile);//Indico di processare i file html come se avessero estensione EJS
app.set('view engine','ejs'); //

//middleware
app.use(morgan('dev')); // 
app.use(express.urlencoded({extended:false})); // permette di capire il formato dei form quando arrivano
app.use(express.json()); //permette al sever di capire le richieste in formato json qunado arrivano

//routes 
app.use(require("./routes/index")); //importa il modulo index che si trova in routes
app.use("/api/persone",require("./routes/persone"));

//static files

//init del server
app.listen(app.get('port'), ()=>{
    console.log("Server in ascolto sulla porta "+ app.get('port'));
    //console.log("Il path è: "+app.get('views'));
}); //