import React, { useState } from "react";
import "./App.css";

function App() {
  let [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result + event.target.name);
  };

  const calculate = () => {
    try {
      setResult(eval(result.replace(/%/g, "/100")).toString());
    } catch (e) {
      setResult("Error");
    }
  };

  const clear = () => {
    setResult("");
  };

  const removeLast = () => {
    setResult(result.slice(0, -1));
  };

  return (
    <div className="App">
      <div className="App_header">
        <div className="logo">
          <a href="https://github.com/AlphaAnas">
            <img src="/logo_anas.jpg" alt="website-logo" />
          </a>
        </div>
        <div className="title">Calculator</div>
      </div>
      <div className="calc">
        <input type="text" placeholder="0" id="answer" value={result} readOnly />

        <div className="row1">
          <button name="1" className="button" onClick={clickHandler}>
            1
          </button>
          <button name="2" className="button" onClick={clickHandler}>
            2
          </button>
          <button name="3" className="button" onClick={clickHandler}>
            3
          </button>
          <button name="+" className="button" onClick={clickHandler}>
            +
          </button>
        </div>
        <div className="row2">
          <button name="4" className="button" onClick={clickHandler}>
            4
          </button>
          <button name="5" className="button" onClick={clickHandler}>
            5
          </button>
          <button name="6" className="button" onClick={clickHandler}>
            6
          </button>
          <button name="-" className="button" onClick={clickHandler}>
            -
          </button>
        </div>
        <div className="row3">
          <button name="7" className="button" onClick={clickHandler}>
            7
          </button>
          <button name="8" className="button" onClick={clickHandler}>
            8
          </button>
          <button name="9" className="button" onClick={clickHandler}>
            9
          </button>
          <button name="*" className="button" onClick={clickHandler}>
            *
          </button>
        </div>
        <div className="row4">
          <button name="0" className="button" onClick={clickHandler}>
            0
          </button>
          <button name="%" className="button" onClick={clickHandler}>
            %
          </button>
          <button name="/" className="button" onClick={clickHandler}>
            /
          </button>
          <button name="." className="button" onClick={clickHandler}>
            .
          </button>
          <button name="C" className="button" onClick={clear}>
            C
          </button>
          <button name="=" className="button" onClick={calculate}>
            =
          </button>
          <button name="x" className="button" onClick={removeLast}>
            x
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
