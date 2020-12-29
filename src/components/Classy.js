import React from "react";

class Classy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      classy: "CLASSY",
    };
    this.handleClassSwap = this.handleClassSwap.bind(this);
  }

  handleClassSwap = () => {
    this.setState({
      classy: this.state.classy === "CLASSY" ? "CLASSY2" : "CLASSY",
    });
  };

  render() {
    return (
      <main>
        <section className="blue">
          <h2>This view is built from a Class component</h2>
          <figure>
            <img
              src={`/images/${this.state.classy}.gif`}
              alt="Classy!"
              onClick={this.handleClassSwap}
            />
            <figcaption>Click image to change</figcaption>
          </figure>
        </section>
      </main>
    );
  }
}

export default Classy;
