const express = require('express'); 
const router = express.Router(); // dal modulo express richiedo in importare solo la metodo ROUTER
const pathSRC =__dirname.replace('routes','');

router.get('/',(req,res)=>{
    //console.log(pathSRC +' : ******');

    //res.json({"Title":'Ciao Mondo!! \nQuesto è il server di Paolo.'});
    //res.sendFile(path.join(pathSRC,'views/index.html'));
    res.render(pathSRC+'views/index.html',{title:"HOME"});
});

router.get('/chi-sono.html',(req,res)=>{
    res.render(pathSRC+'views/chi-sono.html',{title:"Chi sono?"});
});

router.get('/cosa-faccio.html',(req,res)=>{
    res.render(pathSRC+'views/cosa-faccio.html',{title:"Cosa faccio"});
});

router.get('/collaboratori.html',(req,res)=>{
    res.render(pathSRC+'views/collaboratori.html',{title:"Collaboratori"});
});

router.get('/informazioni-e-contatti.html',(req,res)=>{
    res.render(pathSRC+'views/informazioni-e-contatti.html',{title:"Informazioni e contatti"});
});

router.get('/prove.html',(req,res)=>{
    res.render(pathSRC+'views/prove.html',{title:"Prove"});
});

module.exports=router;