const express = require('express')
const app = express()
const port = 3000

const { initializeApp, cert } = require('firebase-admin/app');
const { getFirestore} = require('firebase-admin/firestore');

var serviceAccount = require("./key.json");

initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

app.set("view engine", "ejs");

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/loginsubmit', (req, res) => {
  const name = req.query.name;
  console.log("name: ", name);
  const password = req.query.password;
  console.log("password: ", password);

  db.collection('users')
  .where('name', '==', name)
  .where('password','==', password)
  .get()
  .then((docs)=>{
      if(docs.size>0){
        res.render("home");
      }
      else{
        res.send("login failed");
      }        
   });
});

app.get('/login', (req, res) => {
    res.render("login")
});

app.get('/signupsubmit', (req, res) => {
    const name = req.query.name;
    console.log("name: ", name);
    const email = req.query.email;
    console.log("email: ", email);
    const password = req.query.password;
    console.log("password: ", password);
    const repassword= req.query.repassword;
    console.log("repassword: ", repassword);

    //Adding new data to collection
db.collection('users')
.add({
  name:name,
  email:email,
  password:password,
}).then(()=>{
  res.render("login");
});
});

app.get('/signup', (req, res) => {
    res.render("signup")
});

app.get('/home', (req, res) => {
  res.render("home")
});

app.get('/enter', (req, res) => {
  res.render("enter")
});

app.get('/youtube', (req, res) => {
  res.render("youtube")
});

app.get('/yousport', (req, res) => {
  res.render("yousport")
});

app.get('/youmusic', (req, res) => {
  res.render("youmusic")
});

app.get('/youvlogs', (req, res) => {
  res.render("youvlogs")
});

app.get('/youmovies', (req, res) => {
  res.render("youmovies")
});

app.get('/yougame', (req, res) => {
  res.render("yougame")
});

app.get('/younews', (req, res) => {
  res.render("younews")
});

app.get('/netflix', (req, res) => {
  res.render("netflix")
});

app.get('/aha', (req, res) => {
  res.render("aha")
});

app.get('/prime', (req, res) => {
  res.render("prime")
});

app.get('/zee', (req, res) => {
  res.render("zee")
});

app.get('/disney', (req, res) => {
  res.render("disney")
});

app.get('/shop', (req, res) => {
  res.render("shop")
});

app.get('/learning', (req, res) => {
  res.render("learning")
});

app.get('/music', (req, res) => {
  res.render("music")
});

app.get('/food', (req, res) => {
  res.render("food")
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});