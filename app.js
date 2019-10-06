// learn about looping

const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/tes-get", (req, res) => {
    console.log("Hello Smart people");
});

app.post("/for", (req, res) => {
    var i;
    for(i=0; i < cars.length; i++) {
        
    }
})

app.listen(3300, () => {
    console.log('Example app listening on port 3300');
});