const express = require('express');
const cors = require('cors');
const app = express();



const allowsOrigins = [
    'capacitor://localhost',
    'ionic:localhost',
    'http://localhost',
    'http://localhost:8080',
    'http://localhost:8100',
]

const corsOptions = {

    origin: (origin, callback) => {
        if (allowsOrigins.includes(origin) || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Origin not allowed by Cors'));
        }
    }
}

app.options('*', cors(corsOptions))


const public = "./public";

//Static file 
app.use(express.static(public));



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Headers", '*');
    next();
})


const port = process.env.PORT || 8083

app.get("/", (req, res)=>{

    res.send("ngrok.......");
})

app.listen(port, ()=>{
    console.log("Listening on " + port);
});