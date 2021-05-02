const {Router} = require('express'); // dal modulo express richiedo in importare solo la metodo ROUTER
const router = Router();

router.get('/',(req,res)=>{
    res.json({"Title":'Ciao Mondo!! \nQuesto è il server di Paolo.'});
});

module.exports=router;