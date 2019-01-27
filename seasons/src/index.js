//Import react
import React from "react";
//Import react
import ReactDOM from "react-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state({ lat: null });

    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({ lat: position.coords.latitude });
      },
      error => console.log(error)
    );
  }
  render() {
    return <div>Latitude: {this.state.lat}</div>;

    //should work
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
