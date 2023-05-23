import React from "react";
import ReactDOM from "react-dom";
import Newapp2 from "./newapp2.js";
//import ItemDetail from './components/ItemDetail.js'
import ContextProvider from "./components/Context.js";
import ItemContextProvider from "./components/ItemContext.js";
import DisplayContextProvider from "./components/displayContext.js";
import LoginContextProvider from "./components/loginContext.js";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter } from "react-router-dom";
ReactDOM.render(
  <ContextProvider>
    <ItemContextProvider>
      <DisplayContextProvider>
        <LoginContextProvider>
          <BrowserRouter>
            <Newapp2 />
          </BrowserRouter>
        </LoginContextProvider>
      </DisplayContextProvider>
    </ItemContextProvider>
  </ContextProvider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
