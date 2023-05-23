const mongoose=require('mongoose')
const dotenv=require('dotenv')
const Db=process.env.DATABASE;
mongoose.connect(Db,{
	useNewUrlParser:true,
	useCreateIndex:true,
	useUnifiedTopology:true,
	useFindAndModify:false
	
	}).then(()=>{
	console.log('connection successful')
	}).catch((err)=>console.log(err))
