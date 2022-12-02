const mongoose = require("mongoose");
const express = require("express");
const app = express();
const structureExported = require("./models/mongooseModel");
const path = require("path")
const methodOverride =require("method-override");


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


;
app.use( ( req , res, next ) => {
    console.log('the server can now be used to send information at localhost:3000/input');
    next();
})
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"));
app.use(express.static(__dirname + '/views'));

// app.use(express.urlencoded({ extended: true }),(req,res)=>{
//     console.log("only information that can be passed through the browser will be used")
// });

// the export and require functions are not working

// const structureExported = new mongoose.Schema({
//     name:String,
//     message:String
// })

// const databaseInput=mongoose.model("databaseInput",structureExported)

main().catch(err => console.log(err));
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/helloWorld')//wanted the actual address localhost didnt work
    //database name is crudApp for future refrence
    .then(()=> {
      console.log("Mongo->Connection from node.js open, helloWorld db should be created")
    })
    .catch(err=> {
      console.log(" Mongo-> the following error occured from the node.js file.")
      console.log(err)
      console.log("Mongo-> check if your running the mongod in the powershell")
    })
    // use `await mongoose.connect('mongodb://user:password@localhost:27017/test');` if your database has auth enabled
  }

// const firstInput= new structureExported({name:"dummyVariable",message:"check if working"})
// const secondInput= new structureExported({name:"save",message:"trying to save from node.js"})

// secondInput.save()
app.get("/dbContents", async(req,res)=>{
  const allEntries= await structureExported.find({});
  console.log(allEntries);
  // res.send("everything will be here")
  res.render("allEntries", {allEntries})
})

app.get("/dbContents/:id", async(req, res)=>{
    // res.send("the contents of the database go here")
    const {id}=req.params;
    const eachdbEntry = await structureExported.findById(id);
    console.log(eachdbEntry);
    res.render("eachEntry", {eachdbEntry})
}) 

app.get("/dbContents/:id/edit", async(req, res)=>{
  const {id}=req.params;
  const eachdbEntry = await structureExported.findById(id);
  res.render("edit", {eachdbEntry})
})  
app.get("/dbContents/edit", async(req, res)=>{
  const {id}=req.params;
  const eachdbEntry = await structureExported.findById(id);
  res.render("edit", {eachdbEntry})
})  

app.put("/dbContents/:id", async(req, res)=>{
  const {id}=req.params;
  const updatedEntry= await structureExported.findByIdAndUpdate(id, req.body, {runValidators: true})
  console.log(req.body);
  res.redirect(`/dbContents/${updatedEntry._id}`)
})

app.delete("/dbContents/:id", async(req, res)=>{
  const {id}=req.params;
  const deleteEntry= await structureExported.findByIdAndDelete(id)
  res.redirect("/dbContents")
})

app.get("/", (req, res)=>{
    res.render("input")
    console.log("did you hit enter in the address bar? the server was refresed at get request localhost:3000/input")
})

app.post("/", (req, res)=>{
    console.log("the following information is being posted from the input form");
    console.log(req.body)
    const newMessage = new structureExported(req.body)
    newMessage.save()
    res.redirect("/dbContents");
})

app.listen(3000, ()=>{
    console.log("app listening on port 3000")
})