import React, { useContext, useEffect } from "react";
import "./newapp2.css";
import Header from "./components/Navbar.js";
import Favourite from "./components/Favourite.js";
import Cards from "./components/Card.js";
import { Container, Row } from "react-bootstrap";
import UserContextProvider from "./components/userDetailsContext.js";
import { Route } from "react-router-dom";
import ItemDetail from "./components/ItemDetail.js";
import { DisplayContext } from "./components/displayContext.js";
import Footer from "./components/Footer.js";

const NewApp2 = () => {
  const [display, setDisplay] = useContext(DisplayContext);

  const getdata = async () => {
    const url =
      "https://api.themoviedb.org/3/movie/550?api_key=32873d766009cc9d6e9fa6ef1954411d";
    const res = await fetch(url);
    const data = await res.json();
    setDisplay(data.results);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <UserContextProvider>
        <Header />
      </UserContextProvider>
      <Route exact path="/">
        <Favourite />
        <Container fluid className="col-lg-9 col-sm-12">
          <Row>
            {display &&
              display.map((item, index) => {
                return (
                  <Cards
                    key={index}
                    id={item.id}
                    title={item.original_title}
                    text={item.overview}
                    img_src={item.poster_path}
                    rating={item.vote_average}
                    release_date={item.release_date}
                  />
                );
              })}
          </Row>
        </Container>
      </Route>
      <Route path="/itemDetails">
        <ItemDetail />
      </Route>
      <Footer />
    </>
  );
};

export default NewApp2;

// import React,{useContext,useEffect} from 'react';
// import './newapp2.css';
// import Header from './components/Navbar.js'
// import Favourite from './components/Favourite.js'
// import Cards from './components/Card.js'
// import {Container,Row} from 'react-bootstrap'
// import UserContextProvider from './components/userDetailsContext.js'
// import {Route} from 'react-router-dom'
// import ItemDetail from './components/ItemDetail.js'
// import {DisplayContext} from './components/displayContext.js';
// import Footer from './components/Footer.js'

// const NewApp2=()=>{
// 		const [display,setDisplay]=useContext(DisplayContext)
// 		const getdata=async()=>{
// 				const url="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="+process.env.REACT_APP_API_KEY
// 				const res= await fetch(url)
// 				const data=await res.json()
// 				setDisplay(data.results)
// 			}
// 		useEffect(()=>{
// 				getdata();
// 			},[])
// 		return(<>
// 			<UserContextProvider>
// 			<Header/>
// 			</UserContextProvider>
// 			<Route exact path="/">
// 			<Favourite/>
// 			<Container fluid className="col-lg-9 col-sm-12">

// 			<Row>
// 					{
// 						display.map((item,index)=>{
// 								return(

// 							<Cards
// 							key={index}
// 							id={item.id}
// 							title={item.original_title}
// 							text={item.overview}
// 							img_src={item.poster_path}
// 							rating={item.vote_average}
// 							release_date={item.release_date}
// 							/>

// 							);
// 						})
// 					}
// 			</Row>
// 			</Container>
// 			</Route>
// 			<Route path='/itemDetails'>
// 			<ItemDetail/>
// 			</Route>
// 			<Footer/>
// 			</>)
// 	}
// export default NewApp2
