import React, { useState } from "react";
import { useInput } from "../hooks/input-hook";
import { Form, Label, Button, Input } from "reactstrap";
import './styles.css'

const inputSty = {
  outline: "none",
  display: "block",
  background: "rgba(100,100,100, 0.4)",
  margin: "5px auto",
  border: "0",
  borderRadius: "8px",
  padding: "2px 20px",
  color: "white",
  fontWeight: "500",
  lineHeight: "inherit",
  transition: "0.3s ease",
  fontFamily: 'Montserrat-Black',
  textShadow: '1px 1px black'
};

const labelSty = {
  display: "block",
  margin: "5px auto",
  color: "white",
  lineHeight: "1",
  textTransform: "uppercase",
  letterSpacing: ".2em",
  fontFamily: 'Montserrat-Black'
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
      <Label style={labelSty}>
        Nombre:
        <Input type="text" value={name} {...bindName} style={inputSty}></Input>
      </Label>
      <Label style={labelSty}>
        Correo:
        <Input
          type="text"
          value={email}
          {...bindEmail}
          style={inputSty}
        ></Input>
      </Label>
      <Label style={labelSty}>
        Twitter:
        <Input
          type="text"
          value={account}
          {...bindAccount}
          style={inputSty}
        ></Input>
      </Label>
      <Button
        className="col-8 sendForm"
        //   className={this.state.activeThumb ? "jello-horizontal" : "none"}
        //   onClick={this.sendData}
      >
        Enviar
        <span role="img" aria-label="star-dust">
          {" "}
          {"\u2728"}
        </span>
      </Button>
    </Form>
  );
}

