import React from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
  render() {

    constructor(props){
        super(props);
        this.state={lat: null};
        
    }


    window.navigator.geolocation.getCurrentPosition(
      position => console.log(position),
      error => console.log(error)
    );
    return <div>Latitude</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
