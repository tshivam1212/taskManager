var jwt = require('jsonwebtoken');
const { verify } = require('jsonwebtoken');


  exports.validatetoken = async(req,res,next)=>{
    try{
       const  { authorization } = req.headers
       let token;
	     if (authorization && authorization.startsWith('Bearer'))
		   token = authorization.split(' ')[1];

       const verified = jwt.verify(token, "gfg_jwt_secret_key",function(error,decode){
         if(error){
           return res.json  ({
            "code":"400" ,
            "Resulttype":" failed",
            "message" : "token is exipire" });
         }
       });
       next();
    }catch(error){

      console.log(error)
    }
  }