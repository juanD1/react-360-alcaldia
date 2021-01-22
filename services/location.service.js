// import locations from "../consts/locations";
import locations from "../consts/plaza";

export function getListTooltips(location) {
  console.log("SERVICE getListTooltips: ", Location);
  if (
    locations.scenes[`${location}`] &&
    locations.scenes[`${location}`].tooltips &&
    locations.scenes[`${location}`].tooltips.length &&
    locations.scenes[`${location}`].tooltips.length > 0
  ) {
    return locations.scenes[`${location}`].tooltips;
  }
  return [];
}

export function getListTransitions(location) {
  console.log("getListTransitions: ", location);
  if (
    locations.scenes[`${location}`] &&
    locations.scenes[`${location}`].transitions &&
    locations.scenes[`${location}`].transitions.length &&
    locations.scenes[`${location}`].transitions.length > 0
  ) {
    return locations.scenes[`${location}`].transitions;
  }
  return [];
}
