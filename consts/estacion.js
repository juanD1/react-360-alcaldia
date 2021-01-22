export default locations = {
  firstScene: {
    name: "locomotora",
    img: "locomotora/loco1.jpg",
  },
  locomotora: {
    name: "locomotora",
    img: "locomotora/loco1.jpg",
    tooltips: [
      {
        width: 35,
        height: 35,
        yaw: -50,
        pitch: 0.1,
        text: "Empleados de los ferrocarriles Nacionales",
        img: "locomotora/infos/ferro4.jpg",
      },
    ],
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 0.5,
        pitch: 0.09,
        goesTo: "estacion",
      },
    ],
  },
  estacion: {
    name: "embarcadero",
    img: "estacion/estacionprin.jpg",
    tooltips: [
      {
        width: 35,
        height: 35,
        yaw: 10.55,
        pitch: 0.1,
        text: "Pasajeros abordando el tren",
        img: "estacion/infos/estacion.jpg",
      },
      {
        width: 35,
        height: 35,
        yaw: 10,
        pitch: 0.1,
        text: "Antigua estacion del tren",
        img: "estacion/infos/estacion2.jpg",
      },
      {
        width: 35,
        height: 35,
        yaw: 11,
        pitch: 0.2,
        text: "inauguracion",
        img: "estacion/infos/ignaguracion.jpg",
      },
    ],
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: -5.3,
        pitch: 0.05,
        goesTo: "locomotora",
      },
    ],
  },
};
