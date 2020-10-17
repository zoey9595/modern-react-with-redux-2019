import axios from "axios";

const KEY = "AIzaSyCACZFp5adrRyNeNymWbeAg7KE-LkzD9Hg";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
