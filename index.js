import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true }));

var array=[];
  app.get("/", (req, res) => {
    res.render("index.ejs",{name:array});
  });
  app.post("/submit",(req,res) => {
    const nm = req.body["name"];
    array.push(nm);
    res.redirect("/"); 
  });
  app.post("/removetask", (req,res) => {
    const index = req.body.index;  
    array.splice(index,1); 
    res.redirect("/"); 
    })
app.post('/clearAllTasks', (req, res) => {
    array = []; 
    res.redirect('/');
});
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });