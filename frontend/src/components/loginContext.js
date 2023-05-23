import React,{useState} from 'react';

export const LoginContext=React.createContext()

const LoginContextProvider=(props)=>{
		const [loginState,setLoginState]=useState(false)
		return(
			<LoginContext.Provider value={[loginState,setLoginState]}>
			{props.children}
			</LoginContext.Provider>
		)
	}
export default LoginContextProvider
