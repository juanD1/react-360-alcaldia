export default locations = {
  firstScene: {
    name: "cultureHome_exterior_gate",
    img: "casaCultura/1.CasaCultura_pasillo_exterior.jpg",
  },
  cultureHome_exterior_gate: {
    name: "cultureHome_exterior_gate",
    img: "casaCultura/1.CasaCultura_pasillo_exterior.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 1.15,
        pitch: 0.09,
        goesTo: "cultureHome_exterior_room",
      },
    ],
  },
  cultureHome_exterior_room: {
    name: "cultureHome_exterior_room",
    img: "casaCultura/2.CasaCultura_salon_exterior.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 3.3,
        pitch: 0.09,
        goesTo: "cultureHome_exterior_gate",
      },
      {
        width: 50,
        height: 50,
        yaw: 0.3,
        pitch: 0.09,
        goesTo: "cultureHome_second_floor",
      },
    ],
  },
  cultureHome_second_floor: {
    name: "cultureHome_second_floor",
    img: "casaCultura/3.CasaCultura_piso2.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 3.9,
        pitch: -0.2,
        goesTo: "cultureHome_exterior_room",
      },
      {
        width: 50,
        height: 50,
        yaw: 3.65,
        pitch: 0.09,
        goesTo: "cultureHome_principal_office",
      },
      {
        width: 50,
        height: 50,
        yaw: 0.95,
        pitch: 0.09,
        goesTo: "cultureHome_principal_room",
      },
    ],
  },
  cultureHome_principal_office: {
    name: "cultureHome_principal_office",
    img: "casaCultura/4.CasaCultura_piso2_officina.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 4.15,
        pitch: -0.09,
        goesTo: "cultureHome_second_floor",
      },
    ],
  },
  cultureHome_principal_room: {
    name: "cultureHome_principal_room",
    img: "casaCultura/5.CasaCultura_piso2_salon_principal.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 0.55,
        pitch: 0.09,
        goesTo: "cultureHome_second_floor",
      },
    ],
  },
};
