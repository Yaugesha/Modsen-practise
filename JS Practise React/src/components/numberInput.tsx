import { ChangeEvent, useState } from "react";

const InputNumber = () => {
  const [inputValaue, setInputValue] = useState<string>("");

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const defineIsPositive = () => {
    if (Number(inputValaue) > 0) return "Число больше нуля";
    else if (Number(inputValaue) < 0) return "Число меньше нуля";
    else return "...";
  };

  return (
    <>
      <input type="number" onChange={handleInput} />
      <p>{defineIsPositive()}</p>
    </>
  );
};

export default InputNumber;
