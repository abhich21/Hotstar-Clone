const req = require("express/lib/request");
const User=require("../models/user.model");



const register=async(req,res)=>{
    console.log(req.body);
    try{
        let user;
        user=await User.findOne({email:req.body.email}).lean().exec();
   
       if(user)
       return res.status(500).send(user);
   
       user=await User.create(req.body);
       return res.status(200).send({status:1,user});
    }catch(err){
          
        return res.status(400).send(err.message);
    }
}

const logIn=async(req,res)=>{
    try{
        let user
        user=await User.findOne({email:req.body.email});

        if(!user)
        return res.status(501).send({status:0});

        const match=user.checkPassword(req.body.password);

        if(!match){
            console.log(match);
            return res.status(502).send({staus:1});
        }
    

        return res.status(201).send({staus:2,user})

    }catch(err){
        return res.status(401).send(err.message);
    }
}

module.exports={register,logIn}