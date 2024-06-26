import { FormEvent, useRef } from "react";

const Form = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputRef.current?.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} type="text" placeholder="text" />
      <button type="submit">Log</button>
    </form>
  );
};

export default Form;
