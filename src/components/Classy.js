import React from "react";

class Classy extends React.Component {
  render() {
    return (
      <main>
        <section className="blue">
          <h2>This view is built from a Class component</h2>
          <p>
            It renders and acts the same as a functional component, but is
            composed in a different way.
          </p>
        </section>
      </main>
    );
  }
}

export default Classy;
