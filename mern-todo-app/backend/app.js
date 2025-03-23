// Proje için gerekli olan paketler
const express = require('express');
const {join} = require('path');
const dbs = require(join(__dirname,'dbs.js'));

//Db connected
dbs();

// Başlangıç ayarları
const app = express();

// Değişkenler ve diziler
const PORT = process.env.PORT || 5001;
const BACKEND_URL = process.env.BACKEND_URL || "http://127.0.0.1:5001";


//Middleware
app.use(express.json())

//Yönlendirme dosyalarının dahil edildiği alan
const mainRouter = require(join(__dirname, 'routes', 'mainRouter.js'));
const addRouter = require(join(__dirname, 'routes', 'addRouter.js'));
const deleteRouter = require(join(__dirname, 'routes', 'deleteRouter.js'));
const editRouter = require(join(__dirname, 'routes', 'editRouter.js'));



//yönlendirme dosyalarının kullanıldığı alan 
app.use('/',mainRouter);
app.use('/add',addRouter);
app.use('/delete',deleteRouter);
app.use('/edit',editRouter);


//Portu dinleme alanı
app.listen(PORT, () => {
    console.log(`Sunucu çalışıyor: ${BACKEND_URL}`);
});
