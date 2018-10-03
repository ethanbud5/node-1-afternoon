const express = require("express");
const bodyParser = require("body-parser");
const mc = require("./controllers/messages_controller");
const cors = require("cors")

const app = express();

app.use(bodyParser.json());
app.use(cors())
app.use(express.static(__dirname+"/../public/build"))

app.get("/api/messages", mc.read);
app.post("/api/messages", mc.create);
app.put("/api/messages/:id", mc.update);
app.delete("/api/messages/:id", mc.delete);

app.listen(3001,()=>{
    console.log("Server is listening!")
})