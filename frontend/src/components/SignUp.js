import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const SignUp = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [user, setUser] = useState({
    email: "",
    uname: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const inputHandle = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const postData = async (e) => {
    e.preventDefault();
    const { email, uname, password, cpassword } = user;
    console.log(user);
    const res = await fetch("http://localhost:3001/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        uname,
        password,
        cpassword,
      }),
    });

    const data = await res.json();
    if (data.status === 422 || !data || password !== cpassword) {
      window.alert("registration failed");
      console.log("registration failed");
    } else {
      window.alert("registration success");
      console.log("registration success");
      //	history.push("/signin")
    }
    setUser({
      email: "",
      uname: "",
      password: "",
      cpassword: "",
    });
  };

  return (
    <>
      <Button variant="primary" className="mr-3" onClick={handleShow}>
        SignUp
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form method="POST">
            <Form.Group controlId="email">
              <Form.Label>Email:</Form.Label>
              <Form.Control
                type="email"
                name="email"
                autoComplete="off"
                value={user.email}
                onChange={inputHandle}
              />
            </Form.Group>

            <Form.Group controlId="uname">
              <Form.Label>User Name:</Form.Label>
              <Form.Control
                type="text"
                name="uname"
                autoComplete="off"
                value={user.uname}
                onChange={inputHandle}
              />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password:</Form.Label>
              <Form.Control
                type="password"
                name="password"
                autoComplete="off"
                value={user.password}
                onChange={inputHandle}
              />
            </Form.Group>

            <Form.Group controlId="cpassword">
              <Form.Label>Confirm Password:</Form.Label>
              <Form.Control
                type="password"
                name="cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={inputHandle}
              />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={postData}>
              Close
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default SignUp;

// import React, { useState } from "react";
// import { Modal, Button, Form } from "react-bootstrap";

// const SignUp = () => {
//   const [show, setShow] = useState(false);
//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);
//   const [user, setUser] = useState({
//     email: "",
//     uname: "",
//     password: "",
//     cpassword: "",
//   });
//   let name, value;
//   const inputHandle = (e) => {
//     name = e.target.name;
//     value = e.target.value;
//     setUser({ ...user, [name]: value });
//   };

//   const postData = async (e) => {
//     e.preventDefault();
//     const { email, uname, password, cpassword } = user;
//     console.log(user);
//     const res = await fetch("http://localhost:3001/signup", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         email,
//         uname,
//         password,
//         cpassword,
//       }),
//     });

//     const data = await res.json();
//     if (data.status === 422 || !data || password !== cpassword) {
//       window.alert("registration failed");
//       console.log("registration failed");
//     } else {
//       window.alert("registration success");
//       console.log("registration success");
//       //	history.push("/signin")
//     }
//     setUser({
//       email: "",
//       uname: "",
//       password: "",
//       cpassword: "",
//     });
//   };
//   return (
//     <>
//       <Button variant="primary" className="mr-3" onClick={handleShow}>
//         SignUp
//       </Button>

//       <Modal show={show} onHide={handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>SignUp</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <Form method="POST">
//             <label htmlFor="email">Email:</label>
//             <br />
//             <input
//               type="email"
//               id="email"
//               name="email"
//               autoComplete="off"
//               value={user.email}
//               onChange={inputHandle}
//             />
//             <br />

//             <label htmlFor="uname">User Name:</label>
//             <br />
//             <input
//               type="text"
//               id="uname"
//               name="uname"
//               autoComplete="off"
//               value={user.uname}
//               onChange={inputHandle}
//             />
//             <br />

//             <label htmlFor="password">Password:</label>
//             <br />
//             <input
//               type="password"
//               id="password"
//               name="password"
//               autoComplete="off"
//               value={user.password}
//               onChange={inputHandle}
//             />
//             <br />

//             <label htmlFor="cpassword">Confirm Password:</label>
//             <br />
//             <input
//               type="password"
//               id="cpassword"
//               name="cpassword"
//               autoComplete="off"
//               value={user.cpassword}
//               onChange={inputHandle}
//             />
//             <br />

//             <Button variant="primary" type="submit" onClick={postData}>
//               Close
//             </Button>
//           </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={handleClose}>
//             Cancel
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//   );
// };

// export default SignUp;
