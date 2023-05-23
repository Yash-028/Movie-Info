import React, { useContext } from "react";
import "./ItemDetail.css";
import Header from "./Navbar.js";
import { Row, Col, Container, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { ItemContext } from "./ItemContext.js";
const ItemDetail = () => {
  const [item, setItem] = useContext(ItemContext);

  const imgPath = "https://image.tmdb.org/t/p/w1280";
  return (
    <>
      <Container className="col-lg-10">
        <Row>
          <Col className="mt-5 px-0 text-center">
            <div style={{ width: "25rem" }}>
              <img
                className="ml-1 mt-5 img-fluid"
                src={imgPath + item.img_src}
                alt="img"
              />
            </div>
          </Col>
          <Col className="mt-5 px-0">
            <h1 className="ml-1 mt-5">{item.title}</h1>
            <br />
            <p className="text-left">{item.text}</p>
            <br />
            <br />
            <h3>Rating {item.rating}</h3>
            <br />
            <h4>Release date {item.release_date}</h4>

            <Button>
              <NavLink to="/" style={{ color: "white" }}>
                Home
              </NavLink>
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ItemDetail;
