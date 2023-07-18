import React, { useState } from "react";
import "../../styles/fractions/fractions.css";

function Fractions() {
  let [data, setData] = useState(0);

  function calc() {
    const info = parseFloat(document.getElementById("amount").value);
    let resultado = document.getElementById("result");

    let rInfo = 1 / info;
    let i = 1;

    for (i; i <= rInfo; i++) {
      if (info === info * i) {
        return (resultado.innerHTML = `${i}/${rInfo}`);
      }
      resultado = 0;
    }
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
