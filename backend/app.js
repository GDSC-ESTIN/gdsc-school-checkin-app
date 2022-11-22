const express = require('express')
const fs = require("fs")
const csv = require("csvtojson")
const converter = require('json-2-csv');

const app = express()

app.use(express.json())
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
        const { id } = req.body
        if (!id) {
            return res.status(400).send("please provide an ID")
        }
        let found = false
        let person;
        for (let i = 0; i < jsonDB.length; i++) {
            if(id === jsonDB[i].id) {
                found = true
                if(jsonDB[i].checked === "true") {
                    return res.status(200).send("Already Checked!")
                }
                jsonDB[i].checked = "true"
                person = jsonDB[i]
            }
        }
        if(!found) {
            return res.status(404).send("Person not found!")
        }
        await converter.json2csv(jsonDB,(err,csv) => {
            fs.writeFileSync("./test.csv",csv)
        })
        res.status(200).json({
            found: found,
            email: person.email,
            name: person.name
        })
    } catch (error) {
        console.log(error);
    }
})

const port = 5000
start()