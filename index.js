const express = require("express");

const app = express();

const port = 8080;
app.listen(port, () => {
  console.log(`your web server has been created on port ${port}`);
});

// app.use((req,res)=>{
//     // console.log(req);
//     console.log("request received");
//     res.send("<h1>Fruits</h1> <ul><li>apple</li> <li>mango</li> <li>banana</li> </ul>")
// })

app.get("/", (req, res) => {
  res.send("hellow i am root");
  console.log("request received");
});
// app.get("/home",(req,res)=>{
//     console.log("request received");
//     res.send("Home");
// })
// app.get("/about",(req,res)=>{
//     console.log("request received");
//     res.send("about us");
// })
// app.get("/contact",(req,res)=>{
//     console.log("request received");
//     res.send("my contact number is 7507380653");
// })

// app.get("*",(req,res)=>{
//     console.log("request received but path not found");
//     res.send("this path does not exist on the server");
// })

//path parameters

app.get("/:username/:id", (req, res) => {
  const { username, id } = req.params;
  const code = ` <h1>welcome @${username}</h1>`;
  res.send(code);
});

app.get("/search", (req, res) => {
  const { q } = req.query;

  res.send(`you have searched: ${q}`);
});
