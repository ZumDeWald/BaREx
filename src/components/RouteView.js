import { useEffect, useState } from "react";

const RouteView = ({ setView }) => {
  const [fieldValue, setFieldValue] = useState("");

  const wordList = [
    "Subject",
    "Expert",
    "Quadrary",
    "Person",
    "Personality",
    "Instance",
    "React",
    "St. Louis",
    "JMM",
    "Truck",
    "camelCase",
    "Written",
    "Zebra",
  ];
  const [sortWords] = useState(wordList);

  useEffect(() => {
    setView("ROUTE");
    return () => {
      setView("HOME");
    };
  }, [setView]);

  return (
    <main>
      <section className="blue">
        <h2>This view renders from a route</h2>
        <p>
          The URL controls which components are mounted and can be stacked (e.g.
          /products/id could load the products logic and the component for the
          individual product)
        </p>
        <br /> <br />
        <h3>Sorted form field</h3>
        <p>
          Below is a 'controled' form field (meaning React cycles the input into
          state which can be used in various ways). Try typing in the field to
          sort the words underneath.
        </p>
        <input
          type="text"
          max="250"
          value={fieldValue}
          onChange={(e) => setFieldValue(e.target.value)}
          placeholder="Controlled Form Field"
        />
        {sortWords
          .filter((w) => w.toLowerCase().includes(fieldValue.toLowerCase()))
          .map((word) => (
            <p>{word}</p>
          ))}
      </section>
    </main>
  );
};

export default RouteView;
