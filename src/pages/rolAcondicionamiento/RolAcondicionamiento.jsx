import React, { useState } from "react";
import "../../styles/rolAcondicionamiento/rolAcondicionamiento.css";
import { rolLavada, rolMolienda } from "../../data/roles";

function RolAcondicionamiento() {
  /*Conditioning*/
  const lote = rolLavada[1].no;
  const tipo = rolLavada[2].no;
  const cambio = rolLavada[3].no;

  /*Milling*/
  const tituloDias = rolMolienda[0].days;
  const numMoliendasDias = rolMolienda[0].nos;
  const tipoMoliendaDias = rolMolienda[0].tipoDays;
  const cambioMoliendaDias = rolMolienda[0].cambioDays;

  /*States for handleSubmit*/
  let [nolot, setNolot] = useState(lote);
  let [notip, setNotip] = useState(tipo);
  let [nocamb, setNocamb] = useState(cambio);

  /*States for handleSubmit2*/
  let [nomolien, setNomolien] = useState(numMoliendasDias);
  let [tipomolienLunes, setTipomolienLunes] = useState(tipoMoliendaDias.lunes);
  let [tipomolienMartes, setTipomolienMartes] = useState(
    tipoMoliendaDias.martes
  );
  let [tipomolienMiercoles, setTipomolienMiercoles] = useState(
    tipoMoliendaDias.miercoles
  );
  let [tipomolienJueves, setTipomolienJueves] = useState(
    tipoMoliendaDias.jueves
  );
  let [tipomolienViernes, setTipomolienViernes] = useState(
    tipoMoliendaDias.viernes
  );
  let [tipomolienSabado, setTipomolienSabado] = useState(
    tipoMoliendaDias.sabado
  );
  let [tipomolienDomingo, setTipomolienDomingo] = useState(
    tipoMoliendaDias.domingo
  );

  let [cambioMolienLunes, setCambioMolienLunes] = useState(
    cambioMoliendaDias.lunes
  );
  let [cambioMolienMartes, setCambioMolienMartes] = useState(
    cambioMoliendaDias.martes
  );
  let [cambioMolienMiercoles, setCambioMolienMiercoles] = useState(
    cambioMoliendaDias.miercoles
  );
  let [cambioMolienJueves, setCambioMolienJueves] = useState(
    cambioMoliendaDias.jueves
  );
  let [cambioMolienViernes, setCambioMolienViernes] = useState(
    cambioMoliendaDias.viernes
  );
  let [cambioMolienSabado, setCambioMolienSabado] = useState(
    cambioMoliendaDias.sabado
  );
  let [cambioMolienDomingo, setCambioMolienDomingo] = useState(
    cambioMoliendaDias.domingo
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    let nolavada = document.getElementById("nolavada").value;
    let nolote = document.getElementById("nolote").value;
    let tipo = document.getElementById("tipo").value;
    let cambio = document.getElementById("cambio").value;
    let nohasta = document.getElementById("nohasta").value;
    let nocambio = document.getElementById("nocambio").value;

    let nohastaNum = parseInt(nohasta);
    let noloteNum = parseInt(nolote) - 1;
    let nolavadaNum = parseInt(nolavada);
    let nocambioNum = parseInt(nocambio);
    let counterTip = -1;
    let counterCamb = -1;

    /*Change the batch number */
    setNolot(
      nolot.map((l) => {
        if (noloteNum < nohastaNum) {
          noloteNum += 1;
          l = noloteNum;
          return l;
        }
      })
    );
    /*Change the batch */
    setNotip(
      notip.map((l) => {
        counterTip += 1;
        if (counterTip === nolavadaNum - 1) {
          return (notip[nolavadaNum - 1] = tipo);
        } else {
          return l;
        }
      })
    );
    setNocamb(
      nocamb.map((l) => {
        counterCamb += 1;
        if (counterCamb === nocambioNum - 1) {
          return (nocamb[nocambioNum - 1] = cambio);
        } else {
          return l;
        }
      })
    );
  };

  const handleSubmit2 = (e) => {
    e.preventDefault();

    const nomolienda = parseInt(document.getElementById("nomolienda").value);
    const tipomolienda = document.getElementById("tipomolienda").value;
    const nocambiomolienda = document.getElementById("nocambiomolienda").value;
    const tipocambiomolienda = document.getElementById(
      "tipo-cambio-molienda"
    ).value;
    const diamolienda = document.getElementById("diamolienda").value;

    let counter = -1;

    /*Try to create a Class to not repeat the code below */
    setTipomolienLunes(
      tipomolienLunes.map((lu) => {
        if (counter === 8) {
          counter = -1;
        }
        counter += 1;

        if (diamolienda === "Lunes") {
          if (nomolienda - 1 === counter) {
            lu = tipomolienda;
            return lu;
          }
        }
        if (counter === 7) {
          counter = -1;
        }
        return lu;
      })
    );
    setTipomolienMartes(
      tipomolienMartes.map((lu) => {
        counter += 1;
        if (diamolienda === "Martes") {
          if (nomolienda - 1 === counter) {
            lu = tipomolienda;
            return lu;
          }
        }
        if (counter === 7) {
          counter = -1;
        }
        return lu;
      })
    );
    setTipomolienMiercoles(
      tipomolienMiercoles.map((lu) => {
        counter += 1;
        if (diamolienda === "Miercoles") {
          if (nomolienda - 1 === counter) {
            lu = tipomolienda;
            return lu;
          }
        }
        if (counter === 7) {
          counter = -1;
        }
        return lu;
      })
    );
    setTipomolienJueves(
      tipomolienJueves.map((lu) => {
        counter += 1;
        if (diamolienda === "Jueves") {
          if (nomolienda - 1 === counter) {
            lu = tipomolienda;
            return lu;
          }
        }
        if (counter === 7) {
          counter = -1;
        }
        return lu;
      })
    );
    setTipomolienViernes(
      tipomolienViernes.map((lu) => {
        counter += 1;
        if (diamolienda === "Viernes") {
          if (nomolienda - 1 === counter) {
            lu = tipomolienda;
            return lu;
          }
        }
        if (counter === 7) {
          counter = -1;
        }
        return lu;
      })
    );
    setTipomolienSabado(
      tipomolienSabado.map((lu) => {
        counter += 1;
        if (diamolienda === "Sabado") {
          if (nomolienda - 1 === counter) {
            lu = tipomolienda;
            return lu;
          }
        }
        if (counter === 7) {
          counter = -1;
        }
        return lu;
      })
    );
    setTipomolienDomingo(
      tipomolienDomingo.map((lu) => {
        counter += 1;
        if (diamolienda === "Domingo") {
          if (nomolienda - 1 === counter) {
            lu = tipomolienda;
            return lu;
          }
        }
        if (counter === 7) {
          counter = -1;
        }
        return lu;
      })
    );

    /*Sets for cambio moliendas*/
    setCambioMolienLunes(
      cambioMolienLunes.map((ca) => {
        counter += 1;
        if (diamolienda === "Lunes" && nocambiomolienda - 1 === counter) {
          ca = tipocambiomolienda;
          return ca;
        }
        if (counter === 7) {
          counter = -1;
        }
        return ca;
      })
    );
    setCambioMolienMartes(
      cambioMolienMartes.map((ca) => {
        counter += 1;
        if (diamolienda === "Martes" && nocambiomolienda - 1 === counter) {
          ca = tipocambiomolienda;
          return ca;
        }
        if (counter === 7) {
          counter = -1;
        }
        return ca;
      })
    );
    setCambioMolienMiercoles(
      cambioMolienMiercoles.map((ca) => {
        counter += 1;
        if (diamolienda === "Miercoles" && nocambiomolienda - 1 === counter) {
          ca = tipocambiomolienda;
          return ca;
        }
        if (counter === 7) {
          counter = -1;
        }
        return ca;
      })
    );
    setCambioMolienJueves(
      cambioMolienJueves.map((ca) => {
        counter += 1;
        if (diamolienda === "Jueves" && nocambiomolienda - 1 === counter) {
          ca = tipocambiomolienda;
          return ca;
        }
        if (counter === 7) {
          counter = -1;
        }
        return ca;
      })
    );
    setCambioMolienViernes(
      cambioMolienViernes.map((ca) => {
        counter += 1;
        if (diamolienda === "Viernes" && nocambiomolienda - 1 === counter) {
          ca = tipocambiomolienda;
          return ca;
        }
        if (counter === 7) {
          counter = -1;
        }
        return ca;
      })
    );
    setCambioMolienSabado(
      cambioMolienSabado.map((ca) => {
        counter += 1;
        if (diamolienda === "Sabado" && nocambiomolienda - 1 === counter) {
          ca = tipocambiomolienda;
          return ca;
        }
        if (counter === 7) {
          counter = -1;
        }
        return ca;
      })
    );
    setCambioMolienDomingo(
      cambioMolienDomingo.map((ca) => {
        counter += 1;
        if (diamolienda === "Domingo" && nocambiomolienda - 1 === counter) {
          ca = tipocambiomolienda;
          return ca;
        }
        if (counter === 7) {
          counter = -1;
        }
        return ca;
      })
    );
  };

  return (
    <>
      <main className="main">
        <div className="main__form-container form-container">
          <form
            onSubmit={handleSubmit}
            id="formulario"
            className="form-container__conditioning-form conditioning-form"
            action="#"
          >
            <label className="conditioning-form__label" htmlFor="nolote">
              No. Lote Inicio
            </label>
            <input
              className="conditioning-form__input"
              type="number"
              id="nolote"
            />
            <label className="conditioning-form__label" htmlFor="nohasta">
              No. Lote Fin
            </label>
            <input
              className="conditioning-form__input"
              type="number"
              id="nohasta"
            />
            <label className="conditioning-form__label" htmlFor="nolavada">
              No. Lavada
            </label>
            <input
              className="conditioning-form__input"
              type="number"
              id="nolavada"
            />
            <label className="conditioning-form__label" htmlFor="tipo">
              Tipo lavada
            </label>
            <select className="conditioning-form__select" id="tipo">
              <option value="COM">COM</option>
              <option value="COM/EXP">COM/EXP</option>
              <option value="ESP">ESP</option>
              <option value="ESP/EXP">ESP/EXP</option>
            </select>
            <label className="conditioning-form__label" htmlFor="nocambio">
              No. Cambio
            </label>
            <input
              className="conditioning-form__input"
              type="number"
              id="nocambio"
            />
            <label className="conditioning-form__label" htmlFor="cambio">
              Cambio
            </label>
            <select className="conditioning-form__select" id="cambio">
              <option value="COM">COM</option>
              <option value="COM/EXP">COM/EXP</option>
              <option value="ESP">ESP</option>
              <option value="ESP/EXP">ESP/EXP</option>
            </select>
            <input
              type="submit"
              value="aplicar"
              className="conditioning-form__submit"
            />
          </form>
          <form
            onSubmit={handleSubmit2}
            id="formulario2"
            className="form-container__milling-form milling-form"
            action="#"
          >
            <label
              className="milling-form__label milling-form__label--nomolienda"
              htmlFor="nomolienda"
            >
              No. Molienda
            </label>
            <input
              className="milling-form__input milling-form__input--nomolienda"
              type="number"
              id="nomolienda"
            />
            <label
              className="milling-form__label milling-form__label--tipomolienda"
              htmlFor="tipomolienda"
            >
              Tipo Molienda
            </label>
            <select
              className="milling-form__select milling-form__select--tipomolienda"
              id="tipomolienda"
            >
              <option value="COM">COM</option>
              <option value="COM/EXP">COM/EXP</option>
              <option value="G1">G1</option>
              <option value="ESP">ESP</option>
              <option value="ESP/EXP">ESP/EXP</option>
              <option value="CAJEME1KG">CAJEME1KG</option>
              <option value="REINA1KG">REINA1KG</option>
              <option value="MARIBEL1KG">MARIBEL1KG</option>
              <option value="CAJEME44KG">CAJEME44KG</option>
              <option value="REINA44KG">REINA44KG</option>
              <option value="MARIBEL44KG">MARIBEL44KG</option>
            </select>
            <label
              className="milling-form__label milling-form__label--nocambiomolienda"
              htmlFor="nocambiomolienda"
            >
              No. Cambio Molienda
            </label>
            <input
              className="milling-form__input milling-form__input--nocambiomolienda"
              type="number"
              id="nocambiomolienda"
            />
            <label
              className="milling-form__label milling-form__label--tipocambiomolienda"
              htmlFor="tipo-cambio-molienda"
            >
              Tipo Cambio Molienda
            </label>
            <select
              className="milling-form__select milling-form__select--tipocambiomolienda"
              id="tipo-cambio-molienda"
            >
              <option value="COM">COM</option>
              <option value="COM/EXP">COM/EXP</option>
              <option value="G1">G1</option>
              <option value="ESP">ESP</option>
              <option value="ESP/EXP">ESP/EXP</option>
              <option value="CAJEME1KG">CAJEME1KG</option>
              <option value="REINA1KG">REINA1KG</option>
              <option value="MARIBEL1KG">MARIBEL1KG</option>
              <option value="CAJEME44KG">CAJEME44KG</option>
              <option value="REINA44KG">REINA44KG</option>
              <option value="MARIBEL44KG">MARIBEL44KG</option>
            </select>
            <label
              className="milling-form__label milling-form__label--diamolienda"
              htmlFor="diamolienda"
            >
              Día
            </label>
            <select
              className="milling-form__select milling-form__select--diamolienda"
              id="diamolienda"
            >
              <option value="Lunes">Lunes</option>
              <option value="Martes">Martes</option>
              <option value="Miercoles">Miércoles</option>
              <option value="Jueves">Jueves</option>
              <option value="Viernes">Viernes</option>
              <option value="Sabado">Sábado</option>
              <option value="Domingo">Domingo</option>
            </select>
            <input
              type="submit"
              value="aplicar"
              className="milling-form__submit"
            />
          </form>
        </div>
        <div className="main__rols-container rols-container">
          <div className="rols-container__conditioning-rol conditioning-rol">
            <h1 className="conditioning-rol__rol-title">LAVADA</h1>
            <div className="conditioning-rol__conditioning-rol-columns-container conditioning-rol-columns-container">
              <div className="conditioning-rol-columns-container__column conditioning-rol-columns-container__column--conditioning-number">
                {<h3>{rolLavada[0].title}</h3>}
                {rolLavada[0].no.map((no, i) => (
                  <p key={no + "-" + i}>{no}</p>
                ))}
              </div>
              <div className="conditioning-rol-columns-container__column conditioning-rol-columns-container__column--conditioning-batch-number">
                {<h3>{rolLavada[1].title}</h3>}
                {nolot.map((no, i) => (
                  <p key={no + "-" + i}>{no}</p>
                ))}
              </div>
              <div className="conditioning-rol-columns-container__column conditioning-rol-columns-container__column--conditioning-type">
                {<h3>{rolLavada[2].title}</h3>}
                {notip.map((no, i) => (
                  <p key={no + "-" + i}>{no}</p>
                ))}
              </div>
              <div className="conditioning-rol-columns-container__column conditioning-rol-columns-container__column--conditioning-type-change">
                {<h3>{rolLavada[3].title}</h3>}
                {nocamb.map((no, i) => (
                  <p key={no + "-" + i}>{no}</p>
                ))}
              </div>
            </div>
          </div>
          <div className="rols-container__milling-rol milling-rol">
            <h1 className="milling-rol__rol-title">MOLIENDA</h1>
            <h2 className="milling-rol__rol-day">{tituloDias[0]}</h2>
            <div className="milling-rol__milling-rol-columns-container milling-rol-columns-container">
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-number">
                {<h3>{rolMolienda[0].no}</h3>}
                {numMoliendasDias.map((n, i) => (
                  <p key={`${n}${i}`}>{n}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-type">
                {<h3>{rolMolienda[0].Tipo}</h3>}
                {tipomolienLunes.map((t, i) => (
                  <p key={`${t}${i}`}>{t}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-change">
                {<h3>{rolMolienda[0].Cambio}</h3>}
                {cambioMolienLunes.map((c, i) => (
                  <p key={`${c}${i}`}>{c}</p>
                ))}
              </div>
            </div>
            <h2 className="milling-rol__rol-day">{tituloDias[1]}</h2>
            <div className="milling-rol__milling-rol-columns-container milling-rol-columns-container">
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-number">
                {<h3>{rolMolienda[0].no}</h3>}
                {numMoliendasDias.map((n, i) => (
                  <p key={`${n}${i}`}>{n}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-type">
                {<h3>{rolMolienda[0].Tipo}</h3>}
                {tipomolienMartes.map((t, i) => (
                  <p key={`${t}${i}`}>{t}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-change">
                {<h3>{rolMolienda[0].Cambio}</h3>}
                {cambioMolienMartes.map((c, i) => (
                  <p key={`${c}${i}`}>{c}</p>
                ))}
              </div>
            </div>
            <h2 className="milling-rol__rol-day">{tituloDias[2]}</h2>
            <div className="milling-rol__milling-rol-columns-container milling-rol-columns-container">
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-number">
                {<h3>{rolMolienda[0].no}</h3>}
                {numMoliendasDias.map((n, i) => (
                  <p key={`${n}${i}`}>{n}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-type">
                {<h3>{rolMolienda[0].Tipo}</h3>}
                {tipomolienMiercoles.map((t, i) => (
                  <p key={`${t}${i}`}>{t}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-change">
                {<h3>{rolMolienda[0].Cambio}</h3>}
                {cambioMolienMiercoles.map((c, i) => (
                  <p key={`${c}${i}`}>{c}</p>
                ))}
              </div>
            </div>
            <h2 className="milling-rol__rol-day">{tituloDias[3]}</h2>
            <div className="milling-rol__milling-rol-columns-container milling-rol-columns-container">
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-number">
                {<h3>{rolMolienda[0].no}</h3>}
                {numMoliendasDias.map((n, i) => (
                  <p key={`${n}${i}`}>{n}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-type">
                {<h3>{rolMolienda[0].Tipo}</h3>}
                {tipomolienJueves.map((t, i) => (
                  <p key={`${t}${i}`}>{t}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-change">
                {<h3>{rolMolienda[0].Cambio}</h3>}
                {cambioMolienJueves.map((c, i) => (
                  <p key={`${c}${i}`}>{c}</p>
                ))}
              </div>
            </div>
            <h2 className="milling-rol__rol-day">{tituloDias[4]}</h2>
            <div className="milling-rol__milling-rol-columns-container milling-rol-columns-container">
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-number">
                {<h3>{rolMolienda[0].no}</h3>}
                {numMoliendasDias.map((n, i) => (
                  <p key={`${n}${i}`}>{n}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-type">
                {<h3>{rolMolienda[0].Tipo}</h3>}
                {tipomolienViernes.map((t, i) => (
                  <p key={`${t}${i}`}>{t}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-change">
                {<h3>{rolMolienda[0].Cambio}</h3>}
                {cambioMolienViernes.map((c, i) => (
                  <p key={`${c}${i}`}>{c}</p>
                ))}
              </div>
            </div>
            <h2 className="milling-rol__rol-day">{tituloDias[5]}</h2>
            <div className="milling-rol__milling-rol-columns-container milling-rol-columns-container">
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-number">
                {<h3>{rolMolienda[0].no}</h3>}
                {numMoliendasDias.map((n, i) => (
                  <p key={`${n}${i}`}>{n}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-type">
                {<h3>{rolMolienda[0].Tipo}</h3>}
                {tipomolienSabado.map((t, i) => (
                  <p key={`${t}${i}`}>{t}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-change">
                {<h3>{rolMolienda[0].Cambio}</h3>}
                {cambioMolienSabado.map((c, i) => (
                  <p key={`${c}${i}`}>{c}</p>
                ))}
              </div>
            </div>
            <h2 className="milling-rol__rol-day">{tituloDias[6]}</h2>
            <div className="milling-rol__milling-rol-columns-container milling-rol-columns-container">
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-number">
                {<h3>{rolMolienda[0].no}</h3>}
                {numMoliendasDias.map((n, i) => (
                  <p key={`${n}${i}`}>{n}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-type">
                {<h3>{rolMolienda[0].Tipo}</h3>}
                {tipomolienDomingo.map((t, i) => (
                  <p key={`${t}${i}`}>{t}</p>
                ))}
              </div>
              <div className="milling-rol-columns-container__column milling-rol-columns-container__column--milling-change">
                {<h3>{rolMolienda[0].Cambio}</h3>}
                {cambioMolienDomingo.map((c, i) => (
                  <p key={`${c}${i}`}>{c}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default RolAcondicionamiento;
