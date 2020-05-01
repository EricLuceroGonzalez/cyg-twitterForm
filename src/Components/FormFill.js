import React, { useState } from "react";
import { useInput } from "../hooks/input-hook";
import { Form, Label, Button, Input } from "reactstrap";
import { InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import "./styles.css";
import "./checkBox.css";
import './FormInputs.css';

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
    <div >
      <Form  onSubmit={handleInput}>
        <input
        className='inputStyle'
          type="text"
          value={name}
          {...bindName}
          placeholder="Nombre"
        ></input>
        <input
          type="text"
          value={email}
          {...bindEmail}
          className='inputStyle'
          placeholder="Correo"
        ></input>
        <input
          type="text"
          value={account}
          {...bindAccount}
          className='inputStyle'
          placeholder="Twitter"
        ></input>
        <label
         className="container col-sm-6 col-md-6 col-7">
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
