---
title: "Basicframeworkphp"
subtitle: ""
date: 2022-11-24T12:26:03+07:00
lastmod: 2022-11-24T12:26:03+07:00
draft: false
author: "Krisna Prihadiyanto"
authorLink: "koleksiprihadi.github.io"
description: ""
license: ""
images: []

tags: ["php"]
categories: ["portofolio"]

featuredImage: ""
featuredImagePreview: ""

hiddenFromHomePage: false
hiddenFromSearch: false
twemoji: false
lightgallery: true
ruby: true
fraction: true
fontawesome: true
linkToMarkdown: true
rssFullText: false

toc:
  enable: true
  auto: true
code:
  copy: true
  maxShownLines: 50
math:
  enable: false
  # ...
mapbox:
  # ...
share:
  enable: true
  # ...
comment:
  enable: true
  # ...
library:
  css:
    # someCSS = "some.css"
    # located in "assets/"
    # Or
    # someCSS = "https://cdn.example.com/some.css"
  js:
    # someJS = "some.js"
    # located in "assets/"
    # Or
    # someJS = "https://cdn.example.com/some.js"
seo:
  images: []
  # ...
---

```

╭━━╮╱╱╱╱╱╱╱╱╱╱╱╭━━━╮╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╭╮╱╱╱╱╱╭╮
┃╭╮┃╱╱╱╱╱╱╱╱╱╱╱┃╭━━╯╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱╱┃┃
┃╰╯╰┳━━┳━━┳┳━━╮┃╰━━┳━┳━━┳╮╭┳━━┳╮╭╮╭┳━━┳━┫┃╭╮╭━━┫╰━┳━━╮
┃╭━╮┃╭╮┃━━╋┫╭━╯┃╭━━┫╭┫╭╮┃╰╯┃┃━┫╰╯╰╯┃╭╮┃╭┫╰╯╯┃╭╮┃╭╮┃╭╮┃
┃╰━╯┃╭╮┣━━┃┃╰━╮┃┃╱╱┃┃┃╭╮┃┃┃┃┃━╋╮╭╮╭┫╰╯┃┃┃╭╮╮┃╰╯┃┃┃┃╰╯┃
╰━━━┻╯╰┻━━┻┻━━╯╰╯╱╱╰╯╰╯╰┻┻┻┻━━╯╰╯╰╯╰━━┻╯╰╯╰╯┃╭━┻╯╰┫╭━╯
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱┃┃╱╱╱╱┃┃
╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╱╰╯╱╱╱╱╰╯
```
# Fitur
- [x] Route
- [x] Koneksi Mysql
- [x] Fungsi Login dan Session
- [x] API
- [x] JWT
- [ ] CKEditor 5
- [ ] Input Captcha

[Saran & Pertanyaan](mailto:koleksiprihadi@gmail.com)



# Penggunaan
1. silahkan clone project ini ke folder htdocs
2. buat file .htaccess dan pastekan kode dibawah ini
```
RewriteEngine On

#website location
RewriteBase /
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d

RewriteRule ^(.+)$ index.php?uri=$1 [QSA,L]
```
3. happy coding

# struktur direktori
```
 📂basicframeworkphp
 ┣ 📂API
 ┃ ┣ 📂mid
 ┃ ┃ ┣ 📜getData.php
 ┃ ┃ ┣ 📜getDataNoAuth.php
 ┃ ┃ ┣ 📜index.php
 ┃ ┃ ┣ 📜login.php
 ┃ ┃ ┗ 📜regis.php
 ┃ ┗ 📜index.php
 ┣ 📂app
 ┃ ┣ 📜API-config.php
 ┃ ┣ 📜config.php
 ┃ ┣ 📜globalconfig.php
 ┃ ┣ 📜index.php
 ┃ ┣ 📜link-css.php
 ┃ ┣ 📜link-javascripts.php
 ┃ ┗ 📜route-config.php
 ┣ 📂assets
 ┃ ┣ 📂css
 ┃ ┃ ┣ 📜index.php
 ┃ ┃ ┗ 📜styles.css
 ┃ ┣ 📂icon
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┗ 📜index.php
 ┃ ┣ 📂img
 ┃ ┃ ┗ 📜index.php
 ┃ ┣ 📂js
 ┃ ┃ ┣ 📜index.php
 ┃ ┃ ┗ 📜myscripts.js
 ┃ ┗ 📜index.php
 ┣ 📂process
 ┃ ┣ 📜index.php
 ┃ ┗ 📜prosesAuth.php
 ┣ 📂route
 ┃ ┣ 📜index.php
 ┃ ┗ 📜route.php
 ┣ 📂views
 ┃ ┣ 📜404.php
 ┃ ┣ 📜home.php
 ┃ ┣ 📜index.php
 ┃ ┣ 📜pgLogin.php
 ┃ ┣ 📜pgLogout.php
 ┃ ┗ 📜user.php
 ┣ 📜.htaccess
 ┣ 📜README.md
 ┗ 📜index.php
                
```
Folder **views** untuk semua file tampilan anda dalam bentuk .php
Folder **process** untuk semua file fungsi php anda untuk melakukan suatu proses seperti CRUD
# Tutorial
### Membuat tampilan home, dll
untuk membuat tampilan silahkan menuliskan file ```.php``` ke folder views
```
|
├─ views
```
dengan cara membuat tampilan seperti biasa dengan html pada file ```.php```, berikut templatenya

```php
<!DOCTYPE html> 

<html>  
   <head> 
      <meta charset = "utf-8"> 
      <title>...</title>
      <?php include 'app/link-css.php';?>
   </head> 
  
   <body> 
      <?php include 'app/link-javascripts.php';?>
   </body> 
</html> 
```

### css
Basic Framework Php ini sudah dilengkapi dengan bootstrap v.5 tetapi jika anda ingin mengcostum css anda bisa menuliskannya pada file styles.css yang terletak pada direktori seperti dibawah ini
```
├─ assets                   
│  ├─ css                   
│  │  ├─ index.php          
│  │  └─ styles.css
```

### Javascript
jika anda ingin membuat javascript dan terpasang di semua page silahkan untuk menuliskan javascript anda ke file myscripts.js yang terletak pada direktori seperti dibawah ini **(sangat disarankan menggunakan function)**
```
│  ├─ js                    
│  │  ├─ index.php          
│  │  └─ myscripts.js 
```


### Membuat route
Setelah selesai membuat tampilan silahkan buat route pada file route.php yang terletak pada folder route

```
├─ route                    
│  └─ route.php
```
berikut syntax pembuatan route view atau file didalam folder views syntaxnya seperti berikut

```php
$route->addView('/tampilananda',"tampilananda.php");
```
untuk membuat route untuk proses atau file didalam folder process syntaxnya seperti berikut
```php
$route->addProcess('/prosesanda',"prosesanda.php");
```


### Penggunaan MySQL
Untuk Menggunakan mysql pertama anda harus mengedit dbhost, dbuser, dbpass, dbname pada file config.php pada direktori

```
htdocs           
├─ app                      
│  ├─ config.php
```
edit lah pada bagian seperti dibawah ini
```php
<?php
class Config {
  // Silahkan disesuaikan dengan configurasi server anda
  public $dbhost = 'localhost';
  public $dbuser = 'Username Database Anda';
  public $dbpass = 'Password Database ANda';
  public $dbname = 'Nama Database Anda';
  ...
```
setelah itu anda harus mengedit file globalconfig.php untuk memanggil fungsi db di setiap page yang anda buat

```
htdocs           
├─ app                      
│  ├─ config.php            
│  ├─ globalconfig.php
```
yang harus anda lakukan ialah hilangkan tanda comment garis miring dua (//) pada 

```php
// $db = new db($conf->get_dbhost(), $conf->get_dbuser(), $conf->get_dbpass(), $conf->get_dbname());
```
menjadi
```php
$db = new db($conf->get_dbhost(), $conf->get_dbuser(), $conf->get_dbpass(), $conf->get_dbname());
```
### Penggunaan Query
masukan kode dibawah ini pada page yang anda buat di folder views seperti penggunaan database pada php native

#### Untuk mengambil sebuah data dari database
```php
$account = $db->query('SELECT * FROM accounts WHERE username = ? AND password = ?', 'test', 'test')->fetchArray();
echo $account['name'];
```

#### Untuk mengambil beberapa data dari database
```php
$accounts = $db->query('SELECT * FROM accounts')->fetchAll();

foreach ($accounts as $account) {
	echo $account['name'] . '<br>';
}
```

#### Untuk mengambil jumlah rows
```php
$accounts = $db->query('SELECT * FROM accounts');
echo $accounts->numRows();
```

#### Untuk menampilkan jumlah baris yang terpengaruhi
sangat berguna untuk mengetahui apakah query insert atau update berhasil atau tidak
```php
$insert = $db->query('INSERT INTO accounts (username,password,email,name) VALUES (?,?,?,?)', 'test', 'test', 'test@gmail.com', 'Test');
echo $insert->affectedRows();
```

#### Untuk menampilkan total query
```php
echo $db->query_count;
```

#### Untuk menampilkan id terakhir yang terinsert
```php
echo $db->lastInsertID();
```

#### Untuk menutup koneksi database
```php
$db->close();
```

### Menggunakan Fitur Login
Basic Framework Php ini telah menyediakan skema login dan session, untuk menggunakannya anda harus

#### 1. aktifkan route /login, /logout dan /auth
pertama masuklah ke file route.php pada folder route
```
├─ route                    
│  ├─ index.php             
│  └─ route.php 
```
hilangkan tanda comment pada kode route berikut
```php
// Aktifkan route dibawah jika ingin menggunakan fitur login

// $route->addView('/login','pgLogin.php');

// $route->addView('/logout','pgLogout.php');

// $route->addProcess('/auth/{aksi}',"prosesAuth.php");


```
menjadi 
```php
// Aktifkan route dibawah jika ingin menggunakan fitur login

$route->addView('/login','pgLogin.php');

$route->addView('/logout','pgLogout.php');

$route->addProcess('/auth/{aksi}',"prosesAuth.php");

```
#### 2. Atur database MySQL anda
1. buatlah table akun pada mysql anda seperti ini

| Nama | Jenis | Ekstra |
|------|-------|--------|
|id|int(11) | AUTO_INCREMENT|
|Auser| Varchar(255)||
|Apass| Varchar(255)||



2. configurasi Database anda pada direktori ```app/config.php```

```
htdocs           
├─ app                      
│  ├─ config.php
```
edit lah pada bagian seperti dibawah ini
```php
<?php

// lokasi file views
class Config {
  // Silahkan disesuaikan dengan configurasi server anda
  public $dbhost = 'localhost';
  public $dbuser = 'Username Database Anda';
  public $dbpass = 'Password Database ANda';
  public $dbname = 'Nama Database Anda';
  ...
```
4. Aktifkan Fitur session
untuk mengaktifkan session anda cukup menghilangkan tanda comment pada ```session_start()``` yang ada pada direktori ```app/globalconfig.php```
```php
...
// Session Login
// session_start();
...
```
menjadi
```php
...
// Session Login
session_start();
...
```
5. tambahkan code ```<?php sessioncek()?>``` disetiap page anda pada awal dokumen yang memerlukan authentikasi login seperti dibawah ini
```php
1 <?php sessioncek();?>
2 <!DOCTYPE html>
3 <html lang="en">
4 <head>
5     <meta charset="UTF-8">
6     <meta http-equiv="X-UA-Compatible" content="IE=edge">
7     <meta name="viewport" content="width=device-width, initial-scale=1.0">
8     <title>Document</title>
9     <?php include 'app/link-css.php';?>
10 </head>
11 <body>
12     <!-- Code Html anda disini -->
13     <?php include 'app/link-javascripts.php';?>
14 </body>
15 </html>
```
5. aturlah route kesuatu halaman jika login berhasil
untuk mengaturnya silahkan edit pada file ```app/config.php``` editlah value dari ```$locsukseslogin```
```php
...
public $locsukseslogin = '/';
...
```

## API
Pada basicframeworkphp ini disediakan fitur API dengan sistem autentikasi menggunakan Jason Web Token (JWT)

[tutorial menyusul]
