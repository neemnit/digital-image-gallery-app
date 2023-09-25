import "./styles.css";
import React from "react";
import Image from "./components/Image";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false,
    };
  }

  // Use the required lifecycle methods here
  componentDidMount() {
    this.setState((prevState) => ({
      loading: !prevState.loading, // Toggle loading state
    }));

    fetch("https://jsonplaceholder.typicode.com/albums/1/photos")
      .then((response) => response.json())
      .then((json) =>
        this.setState((prevState) => ({
          photos: json,
          loading: !prevState.loading, // Toggle loading state
        }))
      );
  }

  render() {
    console.log(this.state.loading);
    // Display loading status here
    // this.setState({
    //   loading:!this.state.loading
    // })

    return (
      <div className="App">
        {this.state.loading && <p>Loading...</p>}
        {this.state.photos.map((photo) => {
          return <Image key={photo.id} photo={photo} />;
        })}
      </div>
    );
  }
}
