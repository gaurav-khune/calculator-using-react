import Button from "./Button";
import { useState } from "react";

const Calculator = () => {
  const buttons = [
    "7",
    "8",
    "9",
    "C",
    "4",
    "5",
    "6",
    "/",
    "1",
    "2",
    "3",
    "*",
    "0",
    "-",
    "+",
    "=",
  ];
  const [currentVal, updateVal] = useState("");

  function operation(value) {
    if (value === "C") {
      updateVal("");
    } else if (value === "=") {
      updateVal(eval(currentVal));
    } else {
      updateVal(currentVal + value);
    }
  }

  return (
    <div className="calculator border rounded p-3" style={{ width: "300px" }}>
      <input
        type="text"
        className="form-control mb-3"
        value={currentVal}
        readOnly
      />

      <div className="row g-2">
        {buttons.map((button) => (
          <div className="col-3" key={button}>
            <Button value={button} onButtonClick={operation} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
