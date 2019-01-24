import React from "react";
import ReactDOM from "react-dom";
import { REFUSED } from "dns";

class App extends React.Componet {
  render() {
    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      error => console.log(error)
    );
    return <div>Latitude</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
