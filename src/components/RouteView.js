import { useEffect } from "react";

const RouteView = ({ setView }) => {
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
      </section>
    </main>
  );
};

export default RouteView;
