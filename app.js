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
    return res.send("Hello Smart people");    
});

app.get("Contoh-1", (res, req) => {
    let data = ["Anggur", "Apel", "Mangga", "Semangka"];
    let manipulation = array_lib(data);

    return res.send(manipulation);
});

app.get("/contoh-2", (req,res) => {
    let data = {
        firstnama   : "Soni",
        lastname    : "Hidayatulloh",
        email       : "sonihidayatulloh797@gmail.com",
        gender      : "Male"
    };

    let result = object_lib.manipulation(data);
    return res.send(result);
});

app.get("contoh-3", (req,res) => {
    let input = ["Hitam"];
    let data = ["Merah", "Biru", "Kuning", "Hijau"];

    let result = object_lib.merge((data = data), (input = input));
    console.log("after", result);

    return res.send(result);
});

app.get("contoh-4", (req,res) => {
    let data_kosong = [];
    console.log("sebelum", data_kosong);

    let warna = "Hello i'm Soni.";
    object_lib.add(data_kosong, warna);
    console.log("sesudah", data_kosong);

    return res.send(data_kosong);
});

app.get("task-2", (req, res) => {
    let isi = ["Teh", "Kopi", "Susu"];
    console.log("isi");

    let panjang = console.log(isi);
    for(let x=0; x<=panjang; x++){
        console.log(panjang);
    }
    return res.send(panjang);
});

app.get("/arrayforeach", (req, res) => {
    var array = ["a","b","c"];
    array.forEach(function(element) {
        console.log(element);
    });
});

app.get("/oop", (req, res) => {
    let BaseSalary = 30000;
    let overtime = 10;
    let rate = 20;

    function getWage(BaseSalary, overtime, rate){
        return BaseSalary + (overtime * rate);
    }

    let employee = {
        BaseSalary  : 30000,
        overtime    : 10,
        rate        : 20,
        getWage     : function() {
            return this.BaseSalary + (this.overtime * this.rate);
        }
    };
employee.getWage();      
});

app.use("/array", array_routes);

app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
});