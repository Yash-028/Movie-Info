import React, { useState, useContext } from "react";
import "./Favourite.css";
import { FavContext } from "./Context.js";
import { ItemContext } from "./ItemContext.js";
import { NavLink } from "react-router-dom";
import { LoginContext } from "./loginContext.js";

const Favourite = () => {
  const imgPath = "https://image.tmdb.org/t/p/w1280";
  const [remfav, setRemfav] = useState("");
  const [fav, setFav] = useContext(FavContext);
  const [loginState, setLoginState] = useContext(LoginContext);

  const DataArr = fav;

  const onSubmit = (obj) => {
    const newFav = fav.filter((item) => item.id !== obj.id);
    setFav(newFav);
  };

  const [item, setItem] = useContext(ItemContext);
  return (
    <>
      <div className="Favourite_div">
        <h1 className="text-center">Your Favourites</h1>
        {DataArr.map((favItem, index) => {
          return (
            <>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                to="/itemDetails"
              >
                <img
                  className="FavImg m-3"
                  alt="FavImg"
                  src={imgPath + favItem.img_src}
                  onClick={setItem(favItem)}
                  key={index}
                />
              </NavLink>
              <button
                className="clear"
                onClick={() => {
                  onSubmit(favItem);
                }}
                value="done"
              >
                <i className="fas fa-window-close"></i>
              </button>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Favourite;
