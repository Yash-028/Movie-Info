const express=require('express');
const bcrypt=require('bcryptjs');
const jwt=require("jsonwebtoken");

const router=express.Router();

require('../db/conn.js')
const NewAppUser=require('../models/schema.js')
router.get('/',(req,res)=>{
		res.send("hello from router")
	})
	
//signup data to database
router.post('/signup',async (req,res)=>{
		
		const{email,uname,password,cpassword}=req.body;
		if(!email|!uname||!password||!cpassword){
				return res.status(422).json({error:"not all fields are filled"})
			}
		try{
			const userExists = await NewAppUser.findOne({email:email})
				if(userExists){
						return res.status(422).json({error:"user already exists"})
					}
				
				if(password!==cpassword){
						return res.status(422).json({error:"password does not match"})
					}
				const user=new NewAppUser({email,uname,password,cpassword})
				await user.save()
				res.status(201).json({message:"user registered"})
			}catch(err){
				console.log(err)
				}	
	})
//login info check
router.post('/login',async(req,res)=>{
		try{
			const{email,password}=req.body;
	//		console.log(email,password)
			if(!email||!password){
					res.status(400).json({err:"please fill all fields"})
				}
				
				
			const userLogin=await NewAppUser.findOne({email})
			if(!userLogin){
					res.status(400).json({err:"user is not registered"})
					//console.log("user not registered")
				}
			
			const isMatch=await bcrypt.compare(password,userLogin.password);
			if(isMatch){
						//console.log(userLogin)
						const userFav=await AppUserFav.findOne({email})
						res.status(201).json({userLogin,userFav});
					}else{
							res.json("invalid login details");
						}		
			
						
			const token=await userLogin.generateAuthToken();
			res.cookie("jwtoken",token,{
					expires:new Date(Date.now()+25892000000),
					httpOnly:true,
					secure:false,
					withCredentials:true,
					credentails:true,
				})
			}catch(err){
				console.log(err)}
	})
const AppUserFav=require('../models/favSchema.js')
	
router.post('/storefav',async (req,res)=>{
		const email=req.body.email
		const favs=req.body.favs
		try{
			const userExists = await AppUserFav.findOne({email})
				if(userExists){
						//console.log(userExists._id)
						await AppUserFav.findByIdAndUpdate(userExists._id,{email,favs})
						
						return res.status(201).json({message:"updated"})
					}else{
				const user=new AppUserFav({email,favs})
				await user.save()
				res.status(201).json(user)
			}
			}catch(err){
				console.log(err)
				}	
		})
module.exports=router;
