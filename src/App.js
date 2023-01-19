import "./App.css";
import { useState } from "react";

function App() {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState("");
  const [result, setResult] = useState("");

  const input1 = document.getElementById("w");
  const input2 = document.getElementById("h");

  

  function click(event) {
    event.preventDefault();

    if (!weight || !height) {
      alert("Enter the both Input Values");
    } else {
      let x = document.getElementById("opt").value;
      if (x === "cm") {
        let cal = (input1.value / (input2.value / 100) ** 2).toFixed(1);
        setBmi(cal);

        if (cal < 18.5) {
          setResult("You are Under-weight");
        } else if (cal >= 18.5 && cal < 25) {
          setResult("You are Normal");
        } else {
          setResult("You are Overweight");
        }
        
      } else {
        let cal = (input1.value / (input2.value * 0.304) ** 2).toFixed(1);
        setBmi(cal);

        if (cal < 18.5) {
          setResult("You are Under-weight");
        } else if (cal >= 18.5 && cal < 25) {
          setResult("You are Normal");
        } else {
          setResult("You are Overweight");
        }
      }
    }
    event.preventDefault();
  }

  return (
    <div className="App">
      <h1><u>Bmi Calculator </u></h1>
      <br />

      <form onSubmit={click}>
        <label htmlFor="weight">Weight : </label>
        <input
          type="number"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          id="w"
        />
        <br />

        <br />
        <label htmlFor="height">Height : </label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          id="h"
        />

        <select name="unit" id="opt" onChange={(e)=>e.target.value}>
          <option value="">Select</option>
          <option value="cm">cm</option>
          <option value="feet">Feet</option>
        </select>
        <br />

        <br />
        <button id="btn">Calculate</button>
      </form>
      <br />
      <div id="child">
        <p>BMI : <b>{bmi}</b></p>
        <p id="add"><u>{result}</u></p>
      </div>
    </div>
  );
}

export default App;
