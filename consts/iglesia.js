export default locations = {
  firstScene: {
    name: "iglesia_main",
    img: "iglesia/sanmiguel3.jpg",
  },
  iglesia_main: {
    name: "locomotora",
    img: "iglesia/sanmiguel3.jpg",
    tooltips: [
      {
        width: 35,
        height: 35,
        yaw: 1,
        pitch: 0.09,
        text: "Construcción de la iglesia San Miguel",
        img: "iglesia/infos/iglesia.jpg",
      },
      {
        width: 35,
        height: 35,
        yaw: 1.9,
        pitch: 0.09,
        text: "Iglesia San Miguel, primeros dias",
        img: "iglesia/infos/iglesia1.jpg",
      },
    ],
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 1.4,
        pitch: 0.09,
        goesTo: "iglesia_center",
      },
    ],
  },
  iglesia_center: {
    name: "iglesia_center",
    img: "iglesia/2.Iglesia_centro.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: -5.65,
        pitch: 0.05,
        goesTo: "iglesia_main",
      },
    ],
  },
};
