import "./EssencialReact.css";
import Header from "../components/componentessential/Header/Header";
import CoreConsepts from "../components/componentessential/CoreConsepts";
import Examples from "../components/componentessential/Examples";

const EssencialReact = () => {
  return (
    <>
      <Header />
      <main>
        <CoreConsepts />
        <Examples />
      </main>
    </>
  );
};

export default EssencialReact;
