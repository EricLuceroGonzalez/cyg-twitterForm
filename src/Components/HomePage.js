import React from "react";
import FormFill from "./FormFill";

const basicStyle = {
  margin: "10px auto",
  // border: "1px solid",
};

function HomePage() {
  return (
    <div className="row">
      <div className="col-md-6 col-12" style={{ margin: "20px auto" }}>
        <p
          style={{
            fontFamily: "Montserrat-Black",
            textTransform: "uppercase",
          }}
        >
          Ya no tienes que ser famoso para ganar dinero con tus redes sociales
          <br></br>
          <span
          style={{
            fontSize: "0.75em",
            fontFamily: "Montserrat-Light",
            textTransform: "lowercase",
          }}
        >
          Comparte anuncios en Twitter y cámbialos por dinero
        </span>
        </p>
      </div>
      <div className="col-md-6 col-12" style={basicStyle}>
        <h6
          style={{
            // margin: "3px auto",
            fontFamily: "Montserrat-Black",
            textTransform: "uppercase",
          }}
        >
          Formulario de invitación
        </h6>
        <FormFill></FormFill>
      </div>
    </div>
  );
}

export default HomePage;
