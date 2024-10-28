import { useState } from "react";
import "./Calculator.css";
import Header from "../components/componentcalculator/Header";
import UserInput from "../components/componentcalculator/UserInput";
import Results from "../components/componentcalculator/Results";

const Calculator = () => {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleChange(inputIdentifier, newValue) {
    setUserInput((prevUserInput) => {
      return {
        ...prevUserInput,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChangeInput={handleChange} />
      {!inputIsValid && <p className="center">please enter valid input data</p>}
      {inputIsValid && <Results input={userInput} />}
    </>
  );
};
export default Calculator;
