import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";

import { bubbleSort, selectionSort, insertionSort } from "./utils/selectOption.js";
import FormOption01 from "./form/formOption01.js";
import FormOption07 from "./form/formOption07.js";

import "./index.css";

function App() {
  const [optionSelect, setOptionSelect] = useState(0);
  const [vetor, setVetor] = useState();
  const [dely, setDely] = useState(0);

  function selectOption(e) {
    setOptionSelect(e);
    setDely(0);
    if (e === 4) {
      let antes = performance.now();
      localStorage.setItem("vetor", JSON.stringify(bubbleSort()))
      let depois = (performance.now() - antes).toFixed(2)
      setDely(depois);
    }
    if (e === 5) {
      let antes = performance.now();
      localStorage.setItem("vetor", JSON.stringify(selectionSort()))
      let depois = (performance.now() - antes).toFixed(2)
      setDely(depois);
    }

    if (e === 6) {
      let antes = performance.now();
      localStorage.setItem("vetor", JSON.stringify(insertionSort()))
      let depois = (performance.now() - antes).toFixed(2)
      setDely(depois);
    }
  }

  function formatVetor() {
    setOptionSelect(3);
    if (localStorage.getItem("vetor") === "Vazio" || !localStorage.getItem("vetor")) {
      localStorage.setItem("vetor", "Vazio");
      setVetor(localStorage.getItem("vetor"))
    } else {
      setVetor(JSON.parse(localStorage.getItem("vetor")).map(i => ' ' + i).join())
    }
  }

  return (
    <div className="center-screen">
      <div className="code-tela">
        <Container>
          <Row>
            <Col md={2} className="my-1">
              <FaCircle size={10} style={{ color: "#ff5f56" }} />
              <FaCircle
                size={10}
                className="ml-2"
                style={{ color: "#ffbd2e" }}
              />
              <FaCircle
                size={10}
                className="ml-2"
                style={{ color: "#27c93f" }}
              />
            </Col>
            <Col md={2} className="my-1"></Col>
          </Row>

          <Row>
            <Col className="mt-2 ">
              <p>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              </p>
              <p className="ml-3 mt-3">Seleciona a opção desejada:</p>

              <p>
                <a
                  className="menu"
                  type="button"
                  onClick={() => selectOption(1)}
                >
                  [1] - Preencher o Vetor
                </a>{" "}
              </p>
              <p>
                <a
                  className="menu"
                  type="button"
                  onClick={() => { localStorage.setItem("vetor", "Vazio"); selectOption(2) }}
                >
                  [2] - Limpar o Vetor
                </a>{" "}
              </p>
              <p>
                <a
                  className="menu"
                  type="button"
                  onClick={() => formatVetor()}
                >
                  [3] - Imprimir o Vetor
                </a>{" "}
              </p>
              <p>
                <a
                  className="menu"
                  type="button"
                  onClick={() => selectOption(4)}
                >
                  [4] - Ordenar Bubble Sort
                </a>{" "}
              </p>
              <p>
                <a
                  className="menu"
                  type="button"
                  onClick={() => selectOption(5)}
                >
                  [5] - Ordenar Selection Sort
                </a>{" "}
              </p>
              <p>
                <a
                  className="menu"
                  type="button"
                  onClick={() => selectOption(6)}
                >
                  [6] - Ordenar Insertion Sort
                </a>{" "}
              </p>
              <p>
                <a
                  className="menu"
                  type="button"
                  onClick={() => selectOption(7)}
                >
                  [7] - Preencher Vetor Aleatoriamente
                </a>{" "}
              </p>
              <p>
                - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
              </p>
              {/* <p>{localStorage.getItem("vetor").join()}</p> */}
              <p style={{ lineHeight: '1.5' }}>{optionSelect === 3 && vetor}</p>
              <p>{optionSelect === 4 || optionSelect === 5 || optionSelect === 6 ? (`Ordenação concluida. Tempo de espera: ${dely}ms `) : null}</p>
            </Col>
          </Row>

          {optionSelect === 1 && (
            <FormOption01 resetOption={() => setOptionSelect(0)} />
          )}

          {optionSelect === 7 && (
            <FormOption07 resetOption={() => setOptionSelect(0)} />
          )}
        </Container>
      </div>
    </div>
  );
}

export default App;
