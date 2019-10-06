// learn about looping

const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true}));

app.get("/tes-get", (req, res) => {
    console.log("Hello Smart people");
});

app.get("/for", (req, res) => {
    var array = ['a', 'b', 'c'];
    for (var i=0; 1<array.length; i++) {
        console.log(array[i]);
    }

    return res.send(array);
})

app.listen(3300, () => {
    console.log('Example app listening on port 3300');
});