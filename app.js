let express = require('express');

let app = express();
app.listen( 3000, function() {
console.log("Zerbitzaria 3000 portuan entzuten");
})

app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'))

app.get("/", function(req, res) {
    res.send("Kaixo mundua!");
    });

app.post('/bezeroa', function(req, res) {
    res.send({"name": req.body.izena, "email": req.body.Email, "password": req.body.password, "confirm-password": req.body.Confirmpassword, "gender": req.body.gender, "dob": req.body.dateofbirth, "address": req.body.address, "city": req.body.city, "zip": req.body.zipcode, "agree": req.body.terms,"newsletter": req.body.newsletter,});
})
