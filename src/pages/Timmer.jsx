import ChallengeTime from "../components/componentTimmerChalleng/ChallengeTime";
import TimerChallenge from "../components/componentTimmerChalleng/TimerChallenge";

const Timmer = () => {
  return (
    <>
      <ChallengeTime />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Not Easy" targetTime={5} />
        <TimerChallenge title="Getting tough" targetTime={10} />
        <TimerChallenge title="Props only" targetTime={15} />
      </div>
    </>
  );
};

export default Timmer;
