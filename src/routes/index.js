const express = require('express'); 
const router = express.Router(); // dal modulo express richiedo in importare solo la metodo ROUTER
const pathSRC =__dirname.replace('routes','');

router.get('/',(req,res)=>{
    //console.log(pathSRC +' : ******');

    //res.json({"Title":'Ciao Mondo!! \nQuesto è il server di Paolo.'});
    //res.sendFile(path.join(pathSRC,'views/index.html'));
    res.render(pathSRC+'views/index.html',{title:"HOME"});
});

router.get('/servizi.html',(req,res)=>{
    res.render(pathSRC+'views/cosa-offro.html',{title:"Servizi"});
});


router.get('/certificazioni.html',(req,res)=>{
    res.render(pathSRC+'views/certificazioni.html',{title:"Certificazioni"});
});

router.get('/contattami.html',(req,res)=>{
    res.render(pathSRC+'views/contattami.html',{title:"Contatti"});
});

module.exports=router;