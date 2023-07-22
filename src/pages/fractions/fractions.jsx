import React, { useState } from "react";
import "../../styles/fractions/fractions.css";
import { fractionData } from "../../data/fractions";

function Fractions() {
  let [data, setData] = useState(0);

  function calc() {
    const medida = parseFloat(document.getElementById("amount").value);
    let resultado = document.getElementById("result");

    let posicionPulgadas = 0;
    let posicionMilimetros = 0;

    let numSavedPulgadas = 0;
    let posSavedPulgadas = 0;

    let numSavedMilimetros = 0;
    let posSavedMilimetros = 0;

    fractionData.decimalPulgada.map((p, i) => {
      let first = Math.abs(p - medida).toFixed(4);

      if (i === 0) {
        numSavedPulgadas = first;
        posSavedPulgadas = p;
      }

      if (numSavedPulgadas > first) {
        numSavedPulgadas = first;
        posSavedPulgadas = p;
      }
    });
    fractionData.decimalMilimetros.map((m, i) => {
      let first = Math.abs(m - medida).toFixed(4);

      if (i === 0) {
        numSavedMilimetros = first;
        posSavedMilimetros = m;
      }

      if (numSavedMilimetros > first) {
        numSavedMilimetros = first;
        posSavedMilimetros = m;
      }
    });

    posicionPulgadas = posSavedPulgadas;
    posicionMilimetros = posSavedMilimetros;

    console.log(
      numSavedPulgadas,
      posicionPulgadas,
      numSavedMilimetros,
      posicionMilimetros
    );
  }

  return (
    <div className="fraction-container">
      <div className="fraction-container__calculator">
        <h1 className="fraction-container__title">
          Hola, aquí se calculan las fracciones
        </h1>
        <label className="fraction-container__ingrese" htmlFor="amount">
          Ingrese medida
        </label>
        <input
          className="fraction-container__input"
          type="number"
          id="amount"
        />
        <button
          className="fraction-container__calcular"
          onClick={() => {
            calc();
          }}
        >
          Calcular
        </button>
        <h3 id="result" className="fraction-container__result">
          3/16
        </h3>
      </div>
    </div>
  );
}

export default Fractions;
