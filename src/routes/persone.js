//Questo codice permette di rispondere alle richieste riferite alle PERSONE
//risponde con la lista di elementi nel finto DB 

const {Router} = require('express'); //da express richiedo il suo metodo Routes (NOTE PER YOMEL: credo sia il modo di importare con js)
const router = Router(); //creo la variabile routes

const persone = require("../../DB.json"); //importo il file DB (database finto)
//console.log(persone);


//routes / indirizzi (richiesta fatta tramite metodo get)
router.get('/',(req,res) => {
    res.json(persone);
});

//routes / indirizzi (richiesta fatta tramite metodo get)
router.post('/',(req,res) => {
    console.log(req.body);
    const {nome,cognome,data}=req.body;
    //res.send("PROVA***: "+data);
    if(nome && cognome&& data){
        const id = persone.length + 1;
        const newPersona = {id,...req.body};
        persone.push(newPersona);
        res.json(persone);
    }else{
        res.status(500).json({error:"C'è stato un errore"});
    }
});

router.delete('/:id',(req,res) =>{
    const {id}=req.params;
    ind=-1;
    for(i=0;i<persone.length;i++){
        if(persone[i].id==id){
            ind=i;
            break;
        }
    }
    if(ind!=-1){
        persone.splice(ind,1);
        res.json(persone);
    }
});



module.exports =router;