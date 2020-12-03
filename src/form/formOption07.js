import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "react-bootstrap";

// import { preencherVetor } from "./selectOption.js";

var vetor = [];

function FormOption07(props) {

  const [qtdVetor, setQtdVetor] = useState();

  //set quantidade do array
  const onQtdVetor = (e) => {
    e.preventDefault();
    vetor = [];

    const num = parseInt(e.target.elements.qtdVetor.value.trim());
    setQtdVetor(num);
    randomArry(num);

  };



  //set elementos do array aletoriamente
  function randomArry(num) {

    const vetor = [];

    for (var i = 0; i < num; i++) {
      vetor.push(Math.floor(Math.random() * 1000));
    }

    localStorage.setItem("vetor", JSON.stringify(vetor));
    props.resetOption();

  };




  return (
    <>
      <form onSubmit={onQtdVetor}>
        <Row>
          <p className="ml-3 mt-3">
            Informe a quantidade do vetor: {!qtdVetor ? null : qtdVetor}
          </p>
          <Col>
            {qtdVetor ? null : (
              <div className="cursor">
                <Form.Control
                  className="input-borda rq-form-element"
                  type="number"
                  name="qtdVetor"
                  required
                />
              </div>
            )}
          </Col>
        </Row>
      </form>


    </>
  );
}

export default FormOption07;
