import Car from "./models/Car";
import History from "./models/History";


export const home = (req, res) => {
  res.sendFile(__dirname + "/views/home2.html")
}
export const search = (req, res) => {
  res.sendFile(__dirname + "/views/search.html");
}
export const calendar = (req, res) => {
  res.sendFile(__dirname + "/views/calendar.html");
}
export const parts = (req, res) => {
  res.sendFile(__dirname + "/views/parts.html");
}


