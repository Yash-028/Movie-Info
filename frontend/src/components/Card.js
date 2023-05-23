import React, { useContext } from "react";
import "./Card.css";
import { Card, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { FavContext } from "./Context.js";
import { ItemContext } from "./ItemContext.js";

const Cards = (props) => {
  const imgPath = "https://image.tmdb.org/t/p/w1280";

  const [fav, setFav] = useContext(FavContext);
  function AddToFav() {
    const repeatCheck = fav[fav.findIndex((x) => x.id === props.id)];
    if (!repeatCheck) {
      const itemToFav = {
        ...props,
      };
      setFav((curr) => [...curr, itemToFav]);
    } else {
      setFav((curr) => [...curr]);
    }
  }
  const [item, setItem] = useContext(ItemContext);
  function itemDetails() {
    const itemDetail = {
      ...props,
    };
    setItem(itemDetail);
  }
  return (
    <>
      <Card className="col-sm-12 col-md-3 col-lg-3 m-5 hover">
        <Card.Img
          style={{ height: "20rem" }}
          className="pt-3 "
          variant="top"
          src={imgPath + props.img_src}
        />
        <Card.Body>
          <Card.Title id="title" className="m-1">
            {props.title}
          </Card.Title>
          <Button variant="primary" id="fav" onClick={AddToFav}>
            Add to favourites
          </Button>
          <Button variant="primary" id="info" onClick={itemDetails}>
            <NavLink
              style={{ color: "white", textDecoration: "none" }}
              to="/itemDetails"
            >
              Item Details
            </NavLink>
          </Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards;
