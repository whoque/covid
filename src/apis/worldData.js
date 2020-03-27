import axios from "axios";

export default axios.create({
  baseURL:
    "https://coronavirus-monitor.p.rapidapi.com/coronavirus/worldstat.php",
  headers: {
    "content-type": "application/octet-stream",
    "x-rapidapi-host": "coronavirus-monitor.p.rapidapi.com",
    "x-rapidapi-key": "2be1416b64msh151647cdfaee04cp1470d7jsnddf4e5ad8fec"
  }
});
