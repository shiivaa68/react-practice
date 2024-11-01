import { useRef, useState } from "react";
import ResultModal from "./ResultModal";
const TimerChallenge = ({ title, targetTime }) => {
  const timer = useRef();
  const dialog = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsactive = timeRemaining > 0 && timeRemaining < targetTime * 1000;
  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    dialog.current.open();
  }
  function handleRßeset(){
    setTimeRemaining(targetTime * 1000);

  }
  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handleStop() {
    dialog.current.open();
    clearInterval(timer.current);
  }

  return (
    <>
      {/* {timerExpired && ( */}
      <ResultModal ref={dialog} targetTime={targetTime}  remainingTime = {timeRemaining} onReset ={handleRßeset} />
      {/* )} */}
      <section className="challenge">
        <h1>{title}</h1>
        {/* {timerExpired && <p>you lost</p>} */}
        <p className="challenge-time">
          {targetTime} seconds {targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsactive ? handleStop : handleStart}>
            {timerIsactive ? "stop" : "start"} challenge
          </button>
        </p>
        <p className={timerIsactive ? "active" : undefined}>
          {timerIsactive ? "Time is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};

export default TimerChallenge;
