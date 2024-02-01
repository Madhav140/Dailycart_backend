const users = require('../Model/userModel')
const jwt = require('jsonwebtoken')

//register

exports.registerController = async(req,res)=>{
    const {username,email,password} = req.body
   
     try {
        const existinguser = await users.findOne({email})
      
         if(existinguser){
            res.status(406).json('Account already exists')
         }
         else{
            const newUser = new users({
                username,
                email,
                password
            })
            await newUser.save()
            res.status(200).json(newUser)
         }

     } catch (error) {
        res.status(401).json(error)
     }

}


//login
exports.loginController = async(req,res)=>{
   const {email,password} = req.body

   try {
        const existinguser = await users.findOne({email , password})

        if(existinguser){
            const token = jwt.sign({userid:existinguser._id},process.env.SECRETKEY)
            res.status(200).json({existinguser,token})
        }
        else{
            res.status(200).json('Invalid email or password')
        }

    
   } catch (error) {
      res.status(401).json(error)
   }



}