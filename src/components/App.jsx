import React from "react";
import Form from "./Form";
import Started from "./Started";

var isLoggedIn = true;
var isRegistered = true;

function App() {
  return (
    <div className="container"> 
      {isLoggedIn? <Started /> : <Form isRegistered = {isRegistered}/>}
    </div>
  );
}

export default App;
