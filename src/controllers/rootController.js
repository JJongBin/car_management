


export const home = (req, res) => {
  // return res.render("home")
  console.log(__dirname + "/../views/home.html")
  res.sendFile(__dirname + "/../views/home.html")
}