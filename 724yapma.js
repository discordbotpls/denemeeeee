//V11 Ve V12'de Uyumludur

//Açılacak Dosya Adı 
keep_alive.js
//İçine Yazılacak Cod
var http = require('http');

http.createServer(function (req, res){
  res.write("Botunuz Güvenli Bir Şekilde 7/24 Olmuştur");//İsteğe bağlı değişebilir (değişmemenizi tavsiye ederim)
  res.end();
}).listen(8080);//Mr.GanK
//Main Dosayasına Tanımlanacak Cod
const keep_alive = require('./keep_alive.js')