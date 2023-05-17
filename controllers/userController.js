let {registerUser,loginUserService} = require("../service/userService")


exports.register = async (req,res,next)=>{
    try{
        const { name, mobile, password} = req.body
        if(!(mobile || password)){
            let err = new Error('Mobile & password is required')
            err.status = 400
            throw (err)
        }
        const creationId = await registerUser(name, mobile, password)
        return res.json({
            creationId:creationId,
            status: 200,
            message:"user succesfully register",
        })

    }catch(err){
        next(err)
    }
}

// user login
exports.login = async (req,res,next)=>{
    try{ 
        const {mobile , password} = req.body
        if(!(mobile || password)){
            let err = new Error('Mobile & password is required')
            err.status = 400
            throw (err)
        }
        const token = await loginUserService(mobile, password)
        return res.json({
                status: 200,
                message: "user succefully login",
                token : (token)
        })
    }
     catch(err){
           next(err)
    }
};


