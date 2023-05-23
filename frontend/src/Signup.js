import React,{useState,useEffect} from 'react';
import db from './firebase';
import firebase from 'firebase';
//import axios from 'axios';
const Signup=()=>{
	const [name,setName]=useState('');
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	const [displayUsers,setDisplayUsers]=useState([]);
	useEffect(()=>{
		db.collection('users')
		.orderBy('timestamp','desc')
		.onSnapshot(snapshot=>{
		console.log(snapshot.docs)
		setDisplayUsers(snapshot.docs.map(doc=>(
		{id: doc.id, name :doc.data().name, email:doc.data().email})))
	})	
	},[]);
	const submitReq=(event)=>{
	event.preventDefault();
	//const registered={
			//name:name,
			//email:email,
			//password:password	
		//}
	//console.log(registered)
	db.collection('users').add({
					name:name,
					email:email,
					password:password,
					timestamp: firebase.firestore.FieldValue.serverTimestamp()
				})
	setName("");
	setPassword("");
	setEmail("");
	//axios.post('http://localhost:4000/app/signup',registered)
	//.then(response=>console.log(response.data))
	}
	return(<>
	<h4>{name} {email} {password}</h4>
	<form onSubmit={submitReq}>
	<input name="name" defaultValue={name} onChange={event=>{setName(event.target.value)}} type="text" placeholder="enter name"/><br/>
	<input name="email" defaultValue={email} onChange={event=>{setEmail(event.target.value)}} type="email" placeholder="enter email"/><br/>
	<input name="password" defaultValue={password} onChange={event=>{setPassword(event.target.value)}} type="password" placeholder="enter password"/><br/>
	<input type="Submit" value="submit"/><br/>
	</form>
	<ul>
		{displayUsers.map(user=>{
				return(<>
				<li>{user.name} {user.email}</li>
				</>)
				})}		
    </ul>
	</>)
	
}	
export default Signup;

