import React from "react";
import FormFill from "./FormFill";

const basicStyle = {
  margin: "10px auto"
};

function HomePage() {
  return (
    <div className="row">
      <div className="col-md-6 col-12 p-5" style={basicStyle}>
        <h4
          style={{
            margin: "50px auto",
            fontFamily: 'Montserrat-Black',
            textTransform: 'uppercase'
          }}
        >
          Ya no tienes que ser famoso para ganar dinero con tus redes sociales
        </h4>
      </div>
      <div className="col-md-6 col-12" style={basicStyle}>
      <h4
      style={{
        margin: "30px auto",
        fontFamily: 'Montserrat-Black',
        textTransform: 'uppercase'
      }}
      >Formulario de Registro</h4>
        <FormFill></FormFill>
      </div>
    </div>
  );
}

export default HomePage;
