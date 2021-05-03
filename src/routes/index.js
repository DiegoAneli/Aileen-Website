const {Router} = require('express'); // dal modulo express richiedo in importare solo la metodo ROUTER
const router = Router();
const pathPrecc =__dirname.replace('routes','');
const path =require('path');

router.get('/',(req,res)=>{
    //console.log(pathPrecc +' : ******');

    //res.json({"Title":'Ciao Mondo!! \nQuesto è il server di Paolo.'});
    res.sendFile(path.join(pathPrecc,'views/index.html'));
});

module.exports=router;