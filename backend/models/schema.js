const mongoose=require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')
const userSchema=new mongoose.Schema({
		email:{
			type:String,
			required:true
			},
		uname:{
			type:String,
			required:true
			},
		password:{
			type:String,
			required:true
			},
		cpassword:{
			type:String,
			required:true
			},
		tokens:[{
				token:{
						type:String,
						required:true,
					}
			}],
		
	})




	userSchema.pre('save',async function(next){
		console.log("inside pree")
			if(this.isModified('password')){
					console.log("inside pree2")
					this.password=await bcrypt.hash(this.password,10);
					this.cpassword=await bcrypt.hash(this.cpassword,10);
				}
			console.log("inside pree3")
				next();
		})
		
		
		///generate token
	userSchema.methods.generateAuthToken=async function(){
			try{
				const token=jwt.sign({_id:this._id.toString()},process.env.SECRETKEY);
				this.tokens=this.tokens.concat({token})
				await this.save();
				return token;
				
				}catch(err){
				console.log(err)
				}
		}

const NewAppUser=mongoose.model("NewAppUser",userSchema)
module.exports=NewAppUser;
