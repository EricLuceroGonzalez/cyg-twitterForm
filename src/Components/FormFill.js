import React, { useState } from "react";
import { useInput } from "../hooks/input-hook";
import { Form, Label, Button, Input } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import "./styles.css";
import "./checkBox.css";

const inputSty = {
  outline: "none",
  display: "block",
  background: "rgba(130,130,130, 0.4)",
  margin: "5px auto",
  border: "0",
  borderRadius: "8px",
  padding: "2px 18px",
  color: "white",
  fontWeight: "500",
  lineHeight: "inherit",
  transition: "0.3s ease",
  fontFamily: "Montserrat",
  // textShadow: "1px 1px black",
};

export default function FormFill() {
  const { value: name, bind: bindName, reset: resetName } = useInput("");
  const { value: email, bind: bindEmail, reset: resetEmail } = useInput("");
  const { value: account, bind: bindAccount, reset: resetAccount } = useInput(
    ""
  );

  const handleInput = (event) => {
    event.preventDefault();
    alert(`Submiting: ${email}`);
    resetName();
    resetAccount();
    resetEmail();
  };
  return (
    <div>
      <Form  onSubmit={handleInput}>
        <input
          type="text"
          value={name}
          {...bindName}
          style={inputSty}
          placeholder="Nombre"
        ></input>
        <input
          type="text"
          value={email}
          {...bindEmail}
          style={inputSty}
          placeholder="Correo"
        ></input>
        <input
          type="text"
          value={account}
          {...bindAccount}
          style={inputSty}
          placeholder="Twitter"
        ></input>
        <label
        style={inputSty}
         className="container col-sm-6 col-md-8 col-8">
        <input type="checkbox"></input>
        <span className="checkmark"></span>
          Soy mayor de 18 años
        </label>
        <Button
          className="mr-auto ml-auto sendForm"
          // className={this.state.activeThumb ? "jello-horizontal" : "none"}
          //   onClick={this.sendData}
        >
          Enviar
        </Button>
      </Form>
    </div>
  );
}
