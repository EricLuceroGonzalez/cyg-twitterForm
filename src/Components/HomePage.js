import React from "react";
import FormFill from "./FormFill";

const basicStyle = {
  margin: "10px auto",
  // border: "1px solid",
};

function HomePage() {
  return (
    <div className="row">
      <div className="col-md-6 col-12" style={basicStyle}>
        <p
          style={{
            margin: "50px auto",
            fontFamily: "Montserrat-Black",
            textTransform: "uppercase",
          }}
        >
          Ya no tienes que ser famoso para ganar dinero con tus redes sociales
        </p>
      </div>
      <div className="col-md-6 col-12" style={basicStyle}>
        <h6
          style={{
            margin: "3px auto",
            fontFamily: "Montserrat-Black",
            textTransform: "uppercase",
          }}
        >
          Formulario de Registro
        </h6>
        <FormFill></FormFill>
      </div>
    </div>
  );
}

export default HomePage;
