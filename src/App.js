import './App.css';
import React, {useState} from 'react';

function App() {
  const [result, setResult] = useState("");

  const displayNumber = (val) => {
    setResult(result.concat(val.target.name));
  }
  const calculate = () => {
    try {
      // eslint-disable-next-line
      setResult(eval(result).toString());
    } catch(error) {
      setResult("Error")
    }
  }
  const clear = () => {
    setResult("");
  }
  const clearOne = () => {
    setResult(result.slice(0, -1));
  }
  return (
    <div className="container">
      <form>
        <input className="value" type="text" value={result} placeholder="0"/>
      </form>
      <div className="buttons">
        <button className="highlight" id="clear" onClick={clear}>Clear</button>
        <button className="highlight" id="clearOne" onClick={clearOne}>CE</button>
        <button name="/" className="highlight" onClick={displayNumber}>/</button>
        <button name="7" onClick={displayNumber}>7</button>
        <button name="8" onClick={displayNumber}>8</button>
        <button name="9" onClick={displayNumber}>9</button>
        <button name="*" className="highlight" onClick={displayNumber}>*</button>
        <button name="4" onClick={displayNumber}>4</button>
        <button name="5" onClick={displayNumber}>5</button>
        <button name="6" onClick={displayNumber}>6</button>
        <button name="-"className="highlight" onClick={displayNumber}>-</button>
        <button name="1" onClick={displayNumber}>1</button>
        <button name="2" onClick={displayNumber}>2</button>
        <button name="3" onClick={displayNumber}>3</button>
        <button name="+" className="highlight" onClick={displayNumber}>+</button>
        <button name="0" onClick={displayNumber}>0</button>
        <button name="." onClick={displayNumber}>.</button>
        <button className="highlight" id="result" name="=" onClick={calculate}>=</button>
      </div>
    </div>
  );
}
export default App;
