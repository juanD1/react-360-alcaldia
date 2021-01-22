export default locations = {
  firstScene: {
    name: "hotelUnion_main_gate",
    img: "hotelUnion/1.Hotel_resepcion_entrada.jpg",
  },
  hotelUnion_main_gate: {
    name: "hotelUnion_main_gate",
    img: "hotelUnion/1.Hotel_resepcion_entrada.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 0.5,
        pitch: 0.09,
        goesTo: "hotelUnion_waiting_room",
      },
      {
        width: 50,
        height: 50,
        yaw: 0.4,
        pitch: 0.4,
        goesTo: "hotelUnion_second_floor",
      },
    ],
  },
  hotelUnion_waiting_room: {
    name: "hotelUnion_waiting_room",
    img: "hotelUnion/2.Hotel_sala_espera.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: -5.3,
        pitch: 0.05,
        goesTo: "hotelUnion_main_gate",
      },
    ],
  },
  hotelUnion_second_floor: {
    name: "hotelUnion_second_floor",
    img: "hotelUnion/4.Hotel_piso2_escaleras.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: -2.7,
        pitch: -0.3,
        goesTo: "hotelUnion_main_gate",
      },
      {
        width: 50,
        height: 50,
        yaw: 0.29,
        pitch: 0.05,
        goesTo: "hotelUnion_balcony",
      },
      {
        width: 50,
        height: 50,
        yaw: -0.5,
        pitch: 0.05,
        goesTo: "hotelUnion_show_rooms",
      },
    ],
  },
  hotelUnion_balcony: {
    name: "hotelUnion_balcony",
    img: "hotelUnion/8.Hotel_balcon.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: -15.95,
        pitch: 0.05,
        goesTo: "hotelUnion_second_floor",
      },
      {
        width: 50,
        height: 50,
        yaw: -13.2,
        pitch: -0.4,
        goesTo: "hotelUnion_pool",
      },
    ],
  },
  hotelUnion_pool: {
    name: "hotelUnion_pool",
    img: "hotelUnion/9.Hotel_piscina.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 5.45,
        pitch: 0.05,
        goesTo: "hotelUnion_main_gate",
      },
    ],
  },
  hotelUnion_show_rooms: {
    name: "hotelUnion_show_rooms",
    img: "hotelUnion/7.Hotel_habitaciones2.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 6.45,
        pitch: 0.05,
        goesTo: "hotelUnion_second_floor",
      },
    ],
  },
};
