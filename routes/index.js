const {Router} = require('express'); // dal modulo express richiedo in importare solo la metodo ROUTER
const router = Router();

router.get('/',(req,res)=>{
    res.json({"Title":'Ciao Modo!! \nQusesto è il sever di yomel.'});
});

module.exports=router;