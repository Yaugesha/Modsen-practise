import Details from "./components/details";
import Form from "./components/form";
import InputNumber from "./components/numberInput";

function App() {
  const details =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <>
      <Form />
      <Details details={details} />
      <br />
      <br />
      <InputNumber />
    </>
  );
}

export default App;
