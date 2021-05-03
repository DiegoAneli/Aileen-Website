const express = require('express'); 
const router = express.Router(); // dal modulo express richiedo in importare solo la metodo ROUTER
const pathSRC =__dirname.replace('routes','');

router.get('/',(req,res)=>{
    //console.log(pathSRC +' : ******');

    //res.json({"Title":'Ciao Mondo!! \nQuesto è il server di Paolo.'});
    //res.sendFile(path.join(pathSRC,'views/index.html'));
    res.render(pathSRC+'views/index.html');
});

router.get('/prima.html',(req,res)=>{
    //console.log(pathSRC +' : ******');

    //res.json({"Title":'Ciao Mondo!! \nQuesto è il server di Paolo.'});
    //res.sendFile(path.join(pathSRC,'views/index.html'));
    res.render(pathSRC+'views/prima.html');
});

module.exports=router;