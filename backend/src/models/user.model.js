const mongoose=require("mongoose");
const bcryptjs = require('bcryptjs');

const userSchema= new mongoose.Schema({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true}
},{
    versionKey:false,
    timestamps:true
});

userSchema.pre("save",function(next){
    if(!this.isModified("password"))
    return next();

    const hash=bcryptjs.hashSync(this.password,10);
    this.password=hash;
    return next();
});

userSchema.methods.checkPassword=function(password){
    return bcryptjs.compareSync(password,this.password);
}

module.exports=mongoose.model("users",userSchema);
