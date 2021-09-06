import Car from "./models/Car";
import History from "./models/History";
import Part from "./models/Part";


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

// export const search = async (req, res) => {
//   const cars = await Car.find({});
//   // console.log(cars.history);
//   res.render("search.ejs", {datas: cars});
// }

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
    return res.redirect("/search");
  }
  catch(error){
    console.log(error)
    return res.status(400).redirect("/search");
  }
}



export const carDelete = async (req, res) => {
  let {target} = req.body;

  if (typeof target === "string") {
    await Car.findByIdAndDelete(target);
    
  } else {
    for (let i = 0; i<target.length; i++) {
      await Car.findByIdAndDelete(target[i]);
    }
  }
  
  // const cars = await Car.find({});
  return res.redirect("/search");
}

const carDataUpadte = async (id, number, i_number, car_name, owner, phone) => {
  
  await Car.findByIdAndUpdate(id, {
    number, 
    i_number, 
    car_name, 
    owner, 
    phone
  });
}

export const carUpdate = async (req, res) => {
  let {target} = req.body;
  const {number, i_number, car_name, owner, phone} = req.body;

  if (target instanceof Array) {
    for (let i = 0; i < target.length; i++) {
      await carDataUpadte(target[i], number[i], i_number[i], car_name[i], owner[i], phone[i]);
    };
  } else {
    await carDataUpadte(target, number, i_number, car_name, owner, phone);
  }
  
  return res.redirect("/search");
}

export const search = async(req, res) => {
  const { keyword, category } = req.query;
  let cars = [];
  console.log(keyword, category)
  if (keyword){
    if (category) {
      cars = await Car.find({
        [category]: {
          $regex: new RegExp(`.*${keyword}.*`, "i")  
        },
      })
    } else {
      cars = await Car.find({
        number: {
          $regex: new RegExp(`.*${keyword}.*`, "i")  
        },
      })
    }
  } else {
    cars = await Car.find({});
  }
  
  res.render("search.ejs", {datas: cars});
};



export const postParts = async (req, res) => {
  const {car_name, part, price, lastday, num} = req.body;
  // console.log(car_name, part, price, lastday, num);

  try {
    const newPart = await Part.create({
      car_name, 
      part, 
      price, 
      lastday, 
      num
    });
    // user.save();
    return res.redirect("/parts");
  }
  catch(error){
    console.log(error)
    return res.status(400).redirect("/parts");
  }
}

export const parts = async (req, res) => {
  const { keyword } = req.query;

  if (keyword === undefined) {
    const parts = await Part.find();
    res.render("parts.ejs", {datas: parts});
  } else {
    const parts = await Part.find({
      part: {
        $regex: new RegExp(`.*${keyword}.*`, "i")  
      },
    });
    res.render("parts.ejs", {datas: parts});
  }
}

export const calendar = (req, res) => {
  res.render("calendar.ejs");
}



