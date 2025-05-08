import { useState } from 'react';

function CalculatorApp() {
  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [result, setResult] = useState(0);
  const [operation, setOperation] = useState(null);

  const calculateResult = () => {
    let calcResult = 0;

    if (operation === 'addition') {
      calcResult = Number(firstNumber) + Number(secondNumber);
    } else if (operation === 'subtraction') {
      calcResult = Number(firstNumber) - Number(secondNumber);
    } else if (operation === 'multiplication') {
      calcResult = Number(firstNumber) * Number(secondNumber);
    } else if (operation === 'division') {
      calcResult = Number(firstNumber) / Number(secondNumber);
    }

    setResult(calcResult);
  };

  return (
    <>
      <h2>Simple Calculator</h2>
      <input
        type="number"
        name="firstNumber"
        value={firstNumber}
        onChange={(e) => setFirstNumber(e.target.value)}
        placeholder="Enter first number"
      />
      <input
        type="number"
        name="secondNumber"
        value={secondNumber}
        onChange={(e) => setSecondNumber(e.target.value)}
        placeholder="Enter second number"
      />
      <div>
        <label>
          <input
            type="radio"
            name="operation"
            value="addition"
            checked={operation === 'addition'}
            onChange={(e) => setOperation(e.target.value)}
          />
          Addition
        </label>
        <label>
          <input
            type="radio"
            name="operation"
            value="subtraction"
            checked={operation === 'subtraction'}
            onChange={(e) => setOperation(e.target.value)}
          />
          Subtraction
        </label>
        <label>
          <input
            type="radio"
            name="operation"
            value="multiplication"
            checked={operation === 'multiplication'}
            onChange={(e) => setOperation(e.target.value)}
          />
          Multiplication
        </label>
        <label>
          <input
            type="radio"
            name="operation"
            value="division"
            checked={operation === 'division'}
            onChange={(e) => setOperation(e.target.value)}
          />
          Division
        </label>
      </div>
      <button type="button" onClick={calculateResult}>
        Calculate
      </button>
      <input type="text" name="result" value={result} disabled />
    </>
  );
}

export default CalculatorApp;
