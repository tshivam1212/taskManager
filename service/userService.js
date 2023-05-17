const { User } = require('../models/userModel')
var jwt = require('jsonwebtoken');


let registerUser = async(name, mobile, password) => {
    try {
        let user =   await User.findOne({mobile:mobile})
        if(user){       
            let err = new Error('User is already register! please login')
            err.status = 400
            throw (err)
        
        }else{
            let user = new User({
                name: name,
                mobile:mobile,
                password:password
            })
            let response = await user.save()
            return response._id
        }

    } catch (error) {
        throw (error)
    }


}



let loginUserService = async(mobile,password) =>{
   
    const checkuser = await User.find({mobile:mobile})
   
    if(checkuser == null || checkuser && checkuser.length == 0){
        let err = new Error('User not found')
        err.status = 400
        throw (err)
    }
    if(password ==checkuser[0].password){
        const token = await genrateToken(password)
        return token
    }else{          
        let err = new Error('Invalid user')
        err.status = 400
        throw (err)
        }
}


let genrateToken = async(password) =>{
    let jwtSecretKey = "gfg_jwt_secret_key"
    var token = jwt.sign({ password: password },  jwtSecretKey, {
    expiresIn: "240m" // expires in 24 hours
  });
  return  token;
  };


module.exports={
    registerUser:registerUser,
    loginUserService:loginUserService,
    genrateToken:genrateToken
}