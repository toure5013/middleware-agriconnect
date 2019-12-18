const express = require('express');
const cors = require('cors');
const app = express();
const axios = require('axios');


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

app.options('/*', cors(corsOptions))


const public = "./public";

//Static file 
app.use(express.static(public));



app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", '*');
    res.setHeader("Access-Control-Allow-Headers", '*');
    next();
})

var domainName = "ngngjhdjhd"
var url = "https://9d3bdc6e.ngrok.io/";

const port = process.env.PORT || 8083
console.log(url );

var sms = async  (telephone)=>{
    await axios.post('http://badev.lorbouor.org/api/v1/sms',{
            "email": "2019@civagrihack.ci",
            "password": "2019civagrihack",
            "cellphone": telephone,
            "message_content": "Young African Tech: Vous venez d'enregistrer un paiement sur l'application mobile agri-connect. Nous analyserons afin de valider votre paiement. Merci pour votre confiance!"            });
}       


app.get("/*", (req, res)=>{
   
    res.json(
        {
            url : url
        }
    );
    sms(44334233);
})

app.get("/**", (req, res)=>{
   
    res.json(
        {
            url : url
        }
    );
})

app.listen(port, ()=>{
    console.log("Listening on " + port);
});