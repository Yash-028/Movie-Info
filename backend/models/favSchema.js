const mongoose=require('mongoose')

const userSchema=new mongoose.Schema({},
{strict:false}
)
	
const AppUserFav=mongoose.model("AppUserFav",userSchema)
module.exports=AppUserFav;
