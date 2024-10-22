import CoreConsept from "./Header/CoreConsept";
import { CORE_CONCEPTS } from "../data";

const CoreConsepts = () => {
  return (
    <section id="core-concepts">
      <h1>CoreConsepts</h1>
      <ul>
        {CORE_CONCEPTS.map((conceptsItem) => (
          <CoreConsept key={conceptsItem.title} {...conceptsItem} />
        ))}
      </ul>
    </section>
  );
};

export default CoreConsepts;
