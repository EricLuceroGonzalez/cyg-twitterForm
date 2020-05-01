import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./Components/HomePage";
import Footer from "./Components/Footer";
import wu from "./media/wu.png";
import pp from "./media/pp.png";
function App() {
  return (
    <div>
      <div className="App">
        <HomePage></HomePage>
      </div>
      <div className="mr-auto ml-auto">
        <h4 className="texts">
          Gana dinero extra, comparte anuncios en Twitter y retira el pago en
          200 países en todo el mundo.
        </h4>
        <div className="mr-auto ml-auto d-flex justify-content-center col-3 col-sm-2 col-md-2 col-lg-1">
          <img
          className='img-fluid'
            src={wu}
            alt="wstern union logo"
            // style={{ width: "170px", height: "30px" }}
          ></img>
          <img
className='img-fluid'
          src={pp}
            alt="paypal logo"
            // style={{ width: "170px", height: "30px" }}
          ></img>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
