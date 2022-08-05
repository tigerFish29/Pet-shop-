import React from "react";

const Pet = (props) => {
    // pet component
    return React.createElement("div", {}, [
      React.createElement("h1", {}, props.name),
      React.createElement("h2", {}, props.animal),
      React.createElement("h3", {}, props.breed),
    ]);
  };

  export default Pet;