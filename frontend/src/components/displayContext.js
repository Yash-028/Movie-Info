import React,{useState} from 'react';
export const DisplayContext=React.createContext()

const DisplayContextProvider=(props)=>{
		
		const [display,setDisplay]=useState([])
		return(
			<DisplayContext.Provider value={[display,setDisplay]}>
			{props.children}
			</DisplayContext.Provider>
		)
	}
export default DisplayContextProvider
