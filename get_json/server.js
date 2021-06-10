const express = require('express')  // ใช้งาน module express
const app = express()  // สร้างตัวแปร app เป็น instance ของ express
const path = require('path') // เรียกใช้งาน path module
const port = 3000  // port 
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
 
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
// app.use(express.static(path.join(__dirname, 'public')))
 
// ส่งกลับข้อความ "hello world" เมื่อมี GET request มายังหน้า homepage
app.get('/', function (req, res) {
    // res.sendFile(__dirname + "/index.html");
    res.send("test 101").end();
    // res.send(__dirname)
    console.log("test 102");
})
 
app.listen(port, function() {
    console.log(`Example app listening on port ${port}!`)
})