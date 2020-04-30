import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <div
        className="col-12"
        style={{
          color: "white",
          background: "rgb(40,145,115)",
          position: "fixed",
          bottom: "0px",
          fontSize: "0.75em",
          textAlign: "center",
          padding: "20px auto",
        }}
      >
        <span style={{ fontWeight: "bold" }}>PayWithATweet.com</span>
        <div className="theFooter">Gana dinero extra, comparte anuncios en Twitter y retira el pago en 200 países en todo el mundo.</div>
      </div>
    </React.Fragment>
  );
}
