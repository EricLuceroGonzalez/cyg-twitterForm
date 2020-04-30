import React, { useState } from "react";
import { useInput } from "../hooks/input-hook";
import { Form, Label, Button, Input } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import "./styles.css";

const inputSty = {
  outline: "none",
  display: "block",
  background: "rgba(130,130,130, 0.4)",
  margin: "5px auto",
  border: "0",
  borderRadius: "8px",
  padding: "2px 20px",
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
    <Form onSubmit={handleInput}>
      <Input
        type="text"
        value={name}
        {...bindName}
        style={inputSty}
        placeholder="Nombre"
      ></Input>
      <Input
        type="text"
        value={email}
        {...bindEmail}
        style={inputSty}
        placeholder="Correo"
      ></Input>
      <Input
        type="text"
        value={account}
        {...bindAccount}
        style={inputSty}
        placeholder="Twitter"
      ></Input>
      <Button
        className="col-8 sendForm"
        //   className={this.state.activeThumb ? "jello-horizontal" : "none"}
        //   onClick={this.sendData}
      >
        Enviar
      </Button>
    </Form>
  );
}
