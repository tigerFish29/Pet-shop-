const Pet = (props) => {
  // pet component
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Adopt Me"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Sheep Dog",
    }),
  ]);
};
ReactDOM.render(React.createElement(App), document.getElementById("root"));
