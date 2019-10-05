// Latihan artmatika 

const express = require('express');
const app = express();
const array_lib = require("./array");
const object_lib = require("./object");
const array_routes = require9("./routes");
const array_sort = require("./lib/task1");

// untuk memberikan parsing   
app.use(express.urlencoded({extended: true}))

app.get("/Hello", (req,res) => {
    
});

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})