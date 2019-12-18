const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 8083

app.get("/", (req, res)=>{

    res.send("ngrok.......");
})

app.listen(port, ()=>{
    console.log("Listening on " + port);
});