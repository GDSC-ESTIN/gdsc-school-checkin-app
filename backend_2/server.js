const csv = require("csvtojson");
const express = require("express");
const fs = require("fs");
const converter = require("json-2-csv");
const app = express();
const port = 9000;
app.use(express.json());

let jsonDB;

const start = async () => {
    jsonDB = await csv().fromFile("./test.csv")
    app.listen(port, console.log(`app is listening on port ${port}`))
}

  app.get("/api/v1/getData", (req, res) => {
    try {
        const file = fs.readFileSync("./test.csv", "utf8")
        res.status(200).send(file)
    } catch (error) {
        console.log(error);
    }
})
app.post("/api/v1/postData", async (req, res) => {
  try {
    const { id } = req.body;
    let found = false;
    let verify = false;
    const person = {
      id: id,
      name: "",
      email: "",
    }
    const newData = jsonDB.map((item) => {
      if (item.id === id) {
        found = true;
        if (item.checked === "true") verify = true;
        person.name = item.name;
        person.email = item.email;
        return { ...item, checked: "true" };
      } else {
          return item;
        }
      
    });
    if (found == false){
      res.status(404).json({ message: "Not found" });
      return;
    }

    if (verify == true){
      res.status(200).json({ message: "it is already checked!" });
      return;
    }
    // console.log(newData);
    res.status(200).json(
      { message: "success", person: person }
    );
    await converter.json2csv(newData,(err,csv) => {
      fs.writeFileSync("./test.csv",csv)
  })
  } catch (error) {
    res.status(500).json({ message: "server error" });
  }
});


start();

