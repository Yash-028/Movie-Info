import React,{useState} from 'react';

export const FavContext=React.createContext()

const ContextProvider=(props)=>{
		const [fav,setFav]=useState([])
		return(
			<FavContext.Provider value={[fav,setFav]}>
			{props.children}
			</FavContext.Provider>
		)
	}
export default ContextProvider
