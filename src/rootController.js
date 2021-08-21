import Car from "./models/Car";
import History from "./models/History";


// export const home = (req, res) => {
//   res.sendFile(__dirname + "/views/home2.html")
// }
// export const search = (req, res) => {
//   res.sendFile(__dirname + "/views/search.html");
// }
// export const calendar = (req, res) => {
//   res.sendFile(__dirname + "/views/calendar.html");
// }
// export const parts = (req, res) => {
//   res.sendFile(__dirname + "/views/parts.html");
// }

    
    
    
    
export const home = (req, res) => {
  res.render("home2.ejs")
}

export const search = async (req, res) => {
  const cars = await Car.find({});
  console.log(cars)
  res.render("search.ejs", {datas: cars});
}

export const postSearch = async (req, res) => {
  const {number, i_number, car_name, owner, phone} = req.body;

  try {
    const newCar = await Car.create({
      number, 
      i_number, 
      car_name, 
      owner, 
      phone
    });
    // user.save();
    return res.redirect("search.ejs");
  }
  catch(error){
    return res.status(400).render("search.ejs");
  }
}

export const parts = (req, res) => {
  res.render("parts.ejs");
}
export const calendar = (req, res) => {
  res.render("calendar.ejs");
}



