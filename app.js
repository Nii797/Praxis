// learn about looping

const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/tes-get", (req, res) => {

});

app.listen(3300, () => {
    console.log('Example app listening on port 3300');
});