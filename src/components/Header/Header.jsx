import reactImg from "../../assets/react-core-concepts.png";
import "./Header.css";
const reactDescriptions = ["fundemental", "Crucial", "Core"];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max * 1));
}
const Header = () => {
  const description = reactDescriptions[genRandomInt(2)];
  return (
    <header>
      <img src={reactImg} alt="stylized atom" />
      <h1> React Project</h1>
      <p>
        {description}
        React component you will need for almost any app you are going to build
      </p>
    </header>
  );
};

export default Header;
