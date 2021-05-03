const {Router} = require('express'); // dal modulo express richiedo in importare solo la metodo ROUTER
const router = Router();
const pathSRC =__dirname.replace('routes','');
const path =require('path');

router.get('/',(req,res)=>{
    console.log(pathSRC +' : ******');

    //res.json({"Title":'Ciao Mondo!! \nQuesto è il server di Paolo.'});
    res.sendFile(path.join(pathSRC,'views/index.html'));
});

module.exports=router;