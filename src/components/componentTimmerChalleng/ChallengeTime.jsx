import { useState, useRef } from "react";
import "./ChallengeTime.css";

const ChallengeTime = () => {
  const playername = useRef();
  const [enteredPlayerName, setEnteredPlayerName] = useState("");
  // const [submitted, setSubmitted] = useStat(false);
  // console.log(enteredPlayerName);

  // function handleCahge(event) {
  //   setSubmitted(false);
  //   setEnteredPlayerName(event.target.value);
  // }

  function handleClick() {
    setEnteredPlayerName(playername.current.value);
    playername.current.value = "";
    // setSubmitted(true);
  }
  return (
    <section id="player">
      <h2>welcome {enteredPlayerName ?? "unkown entity"} entity</h2>
      <p>
        <input
          ref={playername}
          type="text"
          // onChange={handleCahge} value={enteredPlayerName}
        />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
};

export default ChallengeTime;
