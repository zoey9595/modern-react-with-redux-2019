import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com/",
  headers: {
    Authorization: "Client-ID U8-aq34TC0qMY_di6LSnq0YnMLXLIUf39OL7fEc_sPM",
  },
});
