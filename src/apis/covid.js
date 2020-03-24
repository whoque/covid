import axios from "axios";

export default axios.create({
  baseURL: "https://covid-19-coronavirus-statistics.p.rapidapi.com/v1",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "covid-19-coronavirus-statistics.p.rapidapi.com",
    "x-rapidapi-key": "2be1416b64msh151647cdfaee04cp1470d7jsnddf4e5ad8fec"
  },
  params: {
    country: "India"
  }
});
