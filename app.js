const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');

const app =express();

app.use((request, response, next) => {//oluşturulan tüm route yapıları için herhangi bir istek söz konusu olursa bu istek karşılığında cevap verilmeden önce ilgili middleware devreye girecektir.
    console.log("Yeni bir istek geldi.");
    next();
});
 
const postMiddleware=function (req,res,next){
    console.log("Post isteği için istek gönderildi")
    next();
    
}
app.get('/hello', function(request, response){
   response.send("Merhaba GET isteği attınız")
});


app.post('/hello',postMiddleware, function(request, response){
    response.send("Merhaba POST isteği attınız")
 });

 app.put('/hello', function(request, response){
    response.send("Merhaba PUT isteği attınız")
 });
 
 app.delete('/hello', function(request, response){
    response.send("Merhaba DELETE isteği attınız")
 });



app.listen(3000, function(){
    console.log("Port dinleniyor 3000...");
 });
 