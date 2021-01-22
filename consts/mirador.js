export default locations = {
  firstScene: {
    name: "mirador_center",
    img: "mirador/1.Mirador_centro.jpg",
  },
  mirador_center: {
    name: "mirador_center",
    img: "mirador/1.Mirador_centro.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: -15.4,
        pitch: 0.09,
        goesTo: "mirador_river",
      },
      {
        width: 50,
        height: 50,
        yaw: 27.4,
        pitch: 0.09,
        goesTo: "mirador_background",
      },
    ],
  },
  mirador_river: {
    name: "mirador_river",
    img: "mirador/2.Mirador_rio.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: -14.95,
        pitch: 0.05,
        goesTo: "mirador_center",
      },
    ],
  },
  mirador_background: {
    name: "mirador_background",
    img: "mirador/3.Mirador_fondo.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: -5.95,
        pitch: 0.05,
        goesTo: "mirador_center",
      },
    ],
  },
};
