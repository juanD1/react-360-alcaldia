export default locations = {
  firstScene: {
    img: "img/360/city_center.jpg",
  },
  CityCenter: {
    name: "CityCenter",
    img: "img/360/city_center.jpg",
    tooltips: [
      {
        width: 50,
        height: 50,
        yaw: 11.3,
        pitch: 0.1,
        text: "Video test",
        vid: "img/attractions/hm-short.mp4",
      },
      {
        width: 50,
        height: 50,
        yaw: 10.3,
        pitch: 0.1,
        text: "Chernihiv Regional Youth Center Chernihiv Regional Youth Center",
        img: "img/attractions/youth_center.jpg",
      },
      {
        width: 50,
        height: 50,
        yaw: 6.7,
        pitch: 0.16,
        text:
          "Chernihiv Regional Academic Ukrainian Drama Theater named after Taras Shevchenko",
        description:
          "la academia antes de su remodelacion., la academia antes de su remodelacion., la academia antes de su remodelacion., la academia antes de su remodelacion., la academia antes de su remodelacion., la academia antes de su remodelacion., la academia antes de su remodelacion., la academia antes de su remodelacion., la academia antes de su remodelacion., la academia antes de su remodelacion., la academia antes de su remodelacion., la academia antes de su remodelacion.",
        img: "img/attractions/shevchenko_theatre.jpg",
      },
      {
        width: 50,
        height: 50,
        yaw: 8.65,
        pitch: 0.16,
        text: "Chernihiv Regional State Administration",
        img: "img/attractions/state_administration.jpg",
      },
    ],
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 3.4,
        pitch: 0.09,
        goesTo: "PopudrenkoPark",
      },
      {
        width: 50,
        height: 50,
        yaw: 6.44,
        pitch: 0.09,
        goesTo: "KhmelnytskyPark",
      },
      {
        width: 50,
        height: 50,
        yaw: 7.96,
        pitch: 0.11,
        goesTo: "FoodAvenue",
      },
    ],
  },
  KhmelnytskyPark: {
    name: "KhmelnytskyPark",
    img: "img/360/khmeln_park.jpg",
    tooltips: [
      {
        width: 35,
        height: 35,
        yaw: 9.7,
        pitch: 0.1,
        text: "Zynoviy Bohdan Khmelnytsky monument",
        img: "img/attractions/khmeln_monument.jpg",
      },
      {
        width: 50,
        height: 50,
        yaw: 7.35,
        pitch: 0.16,
        text: "Pyatnytska Church",
        img: "img/attractions/pyatnyckaya_church.jpg",
      },
    ],
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 19.2,
        pitch: 0.09,
        goesTo: "CityCenter",
      },
    ],
  },
  PopudrenkoPark: {
    name: "PopudrenkoPark",
    img: "img/360/popudrenko_park.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 11.2,
        pitch: 0,
        goesTo: "CityCenter",
      },
    ],
    tooltips: [
      {
        width: 35,
        height: 35,
        yaw: 14.32,
        pitch: 0.1,
        text: "Chernihiv National Bank",
        img: "img/attractions/national_bank.jpg",
      },
    ],
  },
  FoodAvenue: {
    name: "PopudrenkoPark",
    img: "img/360/food_avenue.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 9.5,
        pitch: 0.03,
        goesTo: "CityCenter",
      },
      {
        width: 50,
        height: 50,
        yaw: 18.9,
        pitch: 0.02,
        goesTo: "CatherineChurch",
      },
    ],
  },
  CatherineChurch: {
    name: "CatherineChurch",
    img: "img/360/kat_church.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 9.5,
        pitch: 0.01,
        goesTo: "FoodAvenue",
      },
      {
        width: 50,
        height: 50,
        yaw: 17.36,
        pitch: 0,
        goesTo: "Val",
      },
    ],
    tooltips: [
      {
        width: 50,
        height: 50,
        yaw: 18.93,
        pitch: 0.04,
        text: `Catherine's Church`,
        img: "img/attractions/catherine_church.jpg",
      },
    ],
  },
  Val: {
    name: "Val",
    img: "img/360/val.jpg",
    transitions: [
      {
        width: 50,
        height: 50,
        yaw: 10.1,
        pitch: 0.02,
        goesTo: "CatherineChurch",
      },
    ],
    tooltips: [
      {
        width: 50,
        height: 50,
        yaw: 5.47,
        pitch: 0,
        text: `Boris and Glib Cathedral`,
        img: "img/attractions/boris_glib_cathedral.jpg",
      },
      {
        width: 50,
        height: 50,
        yaw: 7.17,
        pitch: -0.02,
        text: `Transfiguration Cathedral`,
        img: "img/attractions/transfiguration_cathedral.jpg",
      },
    ],
  },
};
