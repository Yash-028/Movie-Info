import React, { useState, useContext } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { LoginContext } from "./loginContext.js";
import { UserContext } from "./userDetailsContext.js";
import { FavContext } from "./Context.js";

const Login = () => {
  const [user, setUser] = useContext(UserContext);
  const [fav, setFav] = useContext(FavContext);
  const [show, setShow] = useState(false);
  const history = useHistory();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [loginState, setLoginState] = useContext(LoginContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);

    const res = await fetch("http://localhost:3001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const userData = await res.json();
    setUser(userData.userLogin);

    if (userData.userFav) {
      setFav(userData.userFav.favs);
    }

    console.log(userData);

    if (res.status !== 201 || !userData) {
      window.alert("Invalid credentials");
    } else {
      setLoginState(true);
      handleClose();
    }

    setEmail("");
    setPassword("");
  };

  return (
    <>
      <Button variant="primary" className="mr-3" onClick={handleShow}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Label htmlFor="email">Email:</Form.Label>
            <br />
            <Form.Control
              type="email"
              id="email"
              value={email}
              autoComplete="off"
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <br />

            <Form.Label htmlFor="password">Password:</Form.Label>
            <br />
            <Form.Control
              type="password"
              id="password"
              value={password}
              autoComplete="off"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br />

            <Button variant="primary" onClick={userLogin} type="submit">
              Login
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Login;

// import React, { useState, useContext } from "react";
// import { Modal, Button, Form } from "react-bootstrap";
// import { useHistory } from "react-router-dom";
// import { LoginContext } from "./loginContext.js";
// import { UserContext } from "./userDetailsContext.js";
// import { FavContext } from "./Context.js";
// const Login = () => {
//   const [user, setUser] = useContext(UserContext);
//   const [fav, setFav] = useContext(FavContext);
//   const [show, setShow] = useState(false);
//   const history = useHistory();
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [loginState, setLoginState] = useContext(LoginContext);

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const userLogin = async (e) => {
//     e.preventDefault();
//     console.log(email, password);
//     const res = await fetch("http://localhost:3001/login", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email,
//         password,
//       }),
//     });
//     const userData = await res.json();
//     setUser(userData.userLogin);
//     if (userData.userFav) {
//       setFav(userData.userFav.favs);
//     }
//     console.log(userData);
//     if (res.status !== 201 || !userData) {
//       window.alert("invalid credentials");
//     } else {
//       setLoginState(true);
//       handleClose();
//     }
//     setEmail("");
//     setPassword("");
//   };
//   return (
//     <>
//       <Button variant="primary" className="mr-3" onClick={handleShow}>
//         Login
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>Login</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form>
//             <label htmlFor="email">Email:</label>
//             <br />
//             <input
//               type="email"
//               id="email"
//               value={email}
//               autoComplete="off"
//               name="email"
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <br />

//             <label htmlFor="password">Password:</label>
//             <br />
//             <input
//               type="password"
//               id="password"
//               value={password}
//               autoComplete="off"
//               name="password"
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <br />

//             <Button variant="primary" onClick={userLogin} type="submit">
//               Login
//             </Button>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default Login;
