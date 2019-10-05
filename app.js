// Latihan artmatika 

const express = require('express')
const app = express()

// untuk memberikan parsing   
app.use(express.urlencoded({extended: true}))

app.get("/Hello", (req,res) => {
    console.log("Hello Smart Man");
});

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})