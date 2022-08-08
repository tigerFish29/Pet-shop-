import React from "react";
import { render } from "react-dom";
import SearchParams from "./searchParams";

const App = () => {
  render (
    <div>
    <h1>Adopt Me!</h1>,
     <SearchParams />
    </div>
  )
}


render(<App />, document.getElementById("root"))
