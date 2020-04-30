import React from "react";
import FormFill from "./FormFill";

const basicStyle = {
  margin: "10px auto"
};

function HomePage() {
  return (
    <div className="row">
      <div className="col-md-6 col-12 p-5" style={basicStyle}>
        <p
          style={{
            margin: "5% auto",
            fontFamily: 'Montserrat-Black'
          }}
        >
          Ya no tienes que ser famoso para ganar dinero con tus redes sociales.
        </p>
      </div>
      <div className="col-md-6 col-12" style={basicStyle}>
        <FormFill></FormFill>
      </div>
    </div>
  );
}

export default HomePage;
