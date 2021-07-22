const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe"
('pk_test_51JD9u8SFPjLptyD3pgIhkGN0uGu6yjxhJvgC2yB4itHfjXEsoA5a6GnZXeiDIqr4RPh6nQpqjwWjPNfITXrmTyrP00ktoABBgW')


//API


//-App config
const app = express;


//-Middlewares
app.use(cors({origin: true}));
app.use(express.json());

//API routes
app.get('/',(request, response) => res.status(200).send
('hello world'))   

//-Listen command
exports.api = functions.https.onRequest(app)
