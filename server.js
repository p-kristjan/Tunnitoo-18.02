const express = require("express");
const request = require("request");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){

    let url = 'https://restcountries.eu/rest/v2/name/eesti';
    
    request(url, function(error, response, body){
        console.log("Server status code ", response.statusCode);

        
        let data = JSON.parse(response.body);
        console.log(data);
        res.render('list', {data: data});
        
        
    });

});

app.listen(3000, function(){
    console.log("Server is running on port 3000.");
});