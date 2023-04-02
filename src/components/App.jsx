import React from "react";
import Login from "./Login";
import Form from "./Form";

var isLoggedIn = false;
var isRegistered = true;

function App() {
  return (
    <div className="container"> 
      {isLoggedIn? <h1>Hello</h1> : <Form isRegistered = {isRegistered}/>}
    </div>
  );
}

export default App;
