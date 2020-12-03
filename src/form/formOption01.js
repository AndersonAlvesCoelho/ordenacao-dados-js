import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Form } from "react-bootstrap";

// import { preencherVetor } from "./selectOption.js";

var vetor = [];

function FormOption01(props) {
  

  const [qtdVetor, setQtdVetor] = useState();
  const [qtd, setQtd] = useState();

  //set quantidade do array
  const onQtdVetor = (e) => {
    e.preventDefault();
    vetor = [];

    const num = parseInt(e.target.elements.qtdVetor.value.trim());
    setQtdVetor(num);
    setQtd(num - (num - 1));
  };

  //set elementos do array
  const onVetor = (e) => {
    e.preventDefault();
    vetor.push(parseInt(e.target.elements.vetor.value.trim()));
    e.target.elements.vetor.value = "";
    setQtd(qtd + 1);

    if (qtd === qtdVetor) {
      localStorage.setItem("vetor", JSON.stringify(vetor));
      props.resetOption();
    }
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

      {!qtdVetor ? null : (
        <>
          <form onSubmit={onVetor}>
            <Row>
              <p className="ml-3 mt-3"> {qtd}º - Vetor:</p>
              <Col>
                <div className="cursor">
                  <Form.Control
                    className="input-borda rq-form-element"
                    type="number"
                    name="vetor"
                    required
                  />
                  {/* <p className="mt-1" style={{color: 'red'}}>obs: informe o vetores nesse formato. nº, nº, nº, nº, nº ...,nº</p> */}
                </div>
              </Col>
            </Row>
          </form>
        </>
      )}
    </>
  );
}

export default FormOption01;
