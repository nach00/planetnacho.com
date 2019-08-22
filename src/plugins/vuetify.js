import Vue from "vue";
import Vuetify from "vuetify/lib";
import "@mdi/font/css/materialdesignicons.css";

Vue.use(Vuetify);

const vuetify = new Vuetify({
  icons: {
    iconfont: "mdi"
  },
  options: {
    customProperties: true
  },
  theme: {
    themes: {
      light: {
        primary: "#261447",
        secondary: "#FF6C11",
        accent: "#F706CF",
        error: "#FF4365",
        warning: "#F9C80E",
        info: "#F6019D",
        success: "#2DE2E6",
        uv: "#5F4B8B",
        uvDark: "#382d5d",
        mdLight: "#ECECEC",
        mdDark: "#121212",
        mdRed: "#FB5658",
        mdYellow: "#FFEB3B",
        mdBlue: "#3367D6",
        mdGreen: "#23A86D",
        mdCyan: "#BCE0FD",
        flatTurquoise: "#1abc9c",
        flatEmerland: "#2ecc71",
        flatPeterriver: "#3498db",
        flatAmethyst: "#9b59b6",
        flatWetasphalt: "#34495e",
        flatGreensea: "#16a085",
        flatNephritis: "#27ae60",
        flatBelizehole: "#2980b9",
        flatWisteria: "#8e44ad",
        flatMidnightblue: "#2c3e50",
        flatSunflower: "#f1c40f",
        flatCarrot: "#e67e22",
        flatAlizarin: "#e74c3c",
        flatClouds: "#ecf0f1",
        flatConcrete: "#95a5a6",
        flatOrange: "#f39c12",
        flatPumpkin: "#d35400",
        flatPomegranate: "#c0392b",
        flatSilver: "#bdc3c7"
      }
    }
  }
});

export default vuetify;
