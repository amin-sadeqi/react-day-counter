import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(Date.now());

  const now = new Date(date);
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  function minusStpHAndler() {
    if (step > 1) setStep((s) => s - 1);
  }

  function plusStpHAndler() {
    if (step < 10) setStep((s) => s + 1);
  }

  function minusCntHandler() {
    setCount((c) => c - step);
    setDate((d) => d - Math.abs(step * 24 * 60 * 60 * 1000));
  }

  function plusCntHandler() {
    setCount((c) => c + step);
    setDate((d) => d + Math.abs(step * 24 * 60 * 60 * 1000));
  }

  return (
    <>
      <div>
        <button onClick={minusStpHAndler}> - </button>
        <span> STEP : {step} </span>
        <button onClick={plusStpHAndler}> + </button>
      </div>
      <div>
        <button onClick={minusCntHandler}> - </button>
        <span> COUNT : {count} </span>
        <button onClick={plusCntHandler}> + </button>
      </div>
      <div>
        {count === 0
          ? `today is ${year} ${month} ${day}`
          : count > 0
          ? `${count} day from today is ${year} ${month} ${day}`
          : `${Math.abs(count)} day ago was ${year} ${month} ${day}`}
      </div>
    </>
  );
}
