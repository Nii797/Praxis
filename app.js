// Latihan artmatika 

const express = require('express')
const app = express()

// untuk memberikan parsing   
app.use(express.urlencoded({extended: true}))

app.post('/Cek1', (req, res) => {
    var x, y, z
    x = 5
    y = 3
    z = x + y

    return res.send(`Penjumlahan ${x} + ${y} adalah ${z}`)
})

app.post('/email', (req, res) => {
    let email = req.body.email

    return res.send(`Isi Email adalah ${email}`)
})

app.post("/perhitungan", (req, res) => {
    var a, b, tambah, kurang, bagi, kali
    
    /**
        * Tipe data variabel a dan b harus berupa nomor, tidak kalimat
    */

    a = parseInt(req.body.a)
    b = parseInt(req.body.b)
    tambah = a + b
    kurang = a - b
    kali = a * b
    bagi = a / b
    
    /**
         *cek semua tipe data 
    */

    console.log(typeof a)
    console.log(typeof b)
    console.log(typeof tambah)
    console.log(typeof kurang)
    console.log(typeof kali)
    console.log(typeof bagi)

    return res.send(
        `
        ====================================================================== 
                 Hasil nilai dari perhitungan sederhana adalah : \n
        ======================================================================
        ===== Pertambahan dari ${a} + ${b} = ${tambah}  ===== \n
        ===== Pengurangan dari ${a} - ${b} = ${kurang}  ===== \n
        ===== Perkalian   dari ${a} X ${b} = ${kali}    ===== \n
        ===== Pembagian   dari ${a} : ${b} = ${bagi}    ===== \n
        =====================================================================     
        =====================================================================
         `
    )
 })

app.post("/Rumus-Persegi", (req, res) => {
    var sisi, Hasil

    sisi = parseInt(req.body.sisi)

    hasil = sisi * sisi

    console.log(typeof sisi)
    console.log(typeof hasil)

    return res.send(
        `
            Hitung Luas persegi dari ${sisi} 

            Hasil Prosesnya adalah :
            =========================

            ${sisi} X ${sisi}
             
            =========================

            Hasil dari rumus persegi adalah : ${hasil} CM
        `
    )
})

app.post("/Persegi-Panjang", (req, res) => {
    let panjang, lebar, hasil
    
    panjang = parseInt(req.body.panjang)
    lebar   = parseInt(req.body.lebar)
    hasil   = panjang * lebar

    console.log(typeof panjang)
    console.log(typeof lebar)
    console.log(typeof hasil)

    return res.send(
        `
            Hasil dari rumus persegi panjang adalah : ${hasil}
        `
    )
})

app.post("/rumusluaslingkaran", (req, res) => {
    let jari1, jari2, luas 
        phl = 3.14 
    
    jari1 = parseFloat(req.body.jari1)
    jari2 = parseFloat(req.body.jari2)
    phl   = parseFloat(req.body.phl) 
    luas = phl * jari1 * jari2
    
    console.log(typeof phl)
    console.log(typeof jari1)
    console.log(typeof jari2)
    console.log(typeof luas)

    return res.send(`
        Hasil dari Luas Lingkaran Adalah : ${luas}
    `)
})

// app.post("/PilihanOrangKece", (req, res) => {
//     let nama = str.split("  ");

//     console.log(typeof nama)
    
//     switch(nama){
//         case "Orang_kece":
//             console.log("Orang Kece adalah Soni");
//         break;
//         case "Orang_Jelek":
//             console.log("Toshikin");
//         break;
//         default :
//             console.log("Tidak terdeteksi apakah itu manusia atau bukan");
//     }

//     return res.send(`${nama}`)
// })


app.listen(3300, () => {
    console.log(`Example app listening on port 3300`)
})