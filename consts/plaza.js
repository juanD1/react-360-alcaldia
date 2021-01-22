export default locations = {
  firstScene: {
    name: "plaza",
    img: "plaza/plazaprin.jpg",
  },
  scenes: [
    {
      name: "plaza",
      img: "plaza/plazaprin.jpg",
      tooltips: [
        {
          width: 35,
          height: 35,
          yaw: -2.55,
          pitch: 0.09,
          text: "Antigua plaza de mercado",
          img: "plaza/infos/plaza.jpg",
        },
        {
          width: 35,
          height: 35,
          yaw: -2,
          pitch: 0.09,
          text: "Incendio antigua plaza de mercado",
          img: "plaza/infos/plaza2.jpg",
        },
      ],
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: -15.74,
          pitch: 0.09,
          goesTo: "plaza_left",
        },
        {
          width: 50,
          height: 50,
          yaw: -17.4,
          pitch: 0.09,
          goesTo: "plaza_right",
        },
      ],
    },
    {
      name: "plaza_left",
      img: "plaza/1.Plaza_escaleras.jpg",
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: 80.95,
          pitch: 0.05,
          goesTo: "plaza",
        },
      ],
    },
    {
      name: "plaza_right",
      img: "plaza/2.Plaza_pasillo.jpg",
      transitions: [
        {
          width: 50,
          height: 50,
          yaw: -11.35,
          pitch: 0.05,
          goesTo: "plaza",
        },
      ],
    },
  ],
};

// export default locations = {
//   firstScene: {
//     name: "plaza",
//     img: "plaza/plazaprin.jpg",
//   },
//   plaza: {
//     name: "plaza",
//     img: "plaza/plazaprin.jpg",
//     tooltips: [
//       {
//         width: 35,
//         height: 35,
//         yaw: -2.55,
//         pitch: 0.09,
//         text: "Antigua plaza de mercado",
//         img: "plaza/infos/plaza.jpg",
//       },
//       {
//         width: 35,
//         height: 35,
//         yaw: -2,
//         pitch: 0.09,
//         text: "Incendio antigua plaza de mercado",
//         img: "plaza/infos/plaza2.jpg",
//       },
//     ],
//     transitions: [
//       {
//         width: 50,
//         height: 50,
//         yaw: -15.74,
//         pitch: 0.09,
//         goesTo: "plaza_left",
//       },
//       {
//         width: 50,
//         height: 50,
//         yaw: -17.4,
//         pitch: 0.09,
//         goesTo: "plaza_right",
//       },
//     ],
//   },
//   plaza_left: {
//     name: "plaza_left",
//     img: "plaza/1.Plaza_escaleras.jpg",
//     transitions: [
//       {
//         width: 50,
//         height: 50,
//         yaw: 80.95,
//         pitch: 0.05,
//         goesTo: "plaza",
//       },
//     ],
//   },
//   plaza_right: {
//     name: "plaza_right",
//     img: "plaza/2.Plaza_pasillo.jpg",
//     transitions: [
//       {
//         width: 50,
//         height: 50,
//         yaw: -11.35,
//         pitch: 0.05,
//         goesTo: "plaza",
//       },
//     ],
//   },
// };
