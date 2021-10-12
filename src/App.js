import React from "react";
import "./App.css";
import img from "./tempsnip-removebg-preview.png";
import FormComponent from "./components/Form";
function App() {
  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <FormComponent />
        </div>
        <div className="col d-flex">
          <img src={img} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default App;
