import React from "react";
import { asset, Environment } from "react-360";

// import locations from "../../consts/locations";
import locations from "../../consts/plaza";

// const locationName = locations.CityCenter.name;
console.log("Object.keys(locations): ", Object.keys(locations.scenes));
const locationName = Object.keys(locations.scenes)[0];
const wrappers = [];

export function changeLocation(location) {
  console.log("locationName: ", location);

  locationName = location;
  Environment.setBackgroundImage(
    asset(`${locations.scenes[`${location}`].img}`)
  );

  wrappers.forEach((update) => {
    update();
  });
}

export function wrap(Component) {
  return class Wrapper extends React.Component {
    state = {
      name: locationName,
    };

    componentDidMount() {
      wrappers.push(() => {
        this.setState({
          name: locationName,
        });
      });
    }

    render() {
      return <Component {...this.props} name={this.state.name} />;
    }
  };
}
