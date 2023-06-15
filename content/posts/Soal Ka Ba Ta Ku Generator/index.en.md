---
title: "Soal Ka Ba Ta Ku Generator"
subtitle: ""
date: 2022-11-24T12:26:03+07:00
lastmod: 2022-11-24T12:26:03+07:00
draft: false
author: "Krisna Prihadiyanto"
authorLink: "koleksiprihadi.github.io"
description: ""
license: ""
images: []

tags: ["javascript", "jquery"]
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

 ____  __.     __________      ___________       ____  __.      
|    |/ _|____ \______   \_____\__    ___/____  |    |/ _|__ __ 
|      < \__  \ |    |  _/\__  \ |    |  \__  \ |      < |  |  \
|    |  \ / __ \|    |   \ / __ \|    |   / __ \|    |  \|  |  /
|____|__ (____  /______  /(____  /____|  (____  /____|__ \____/ 
        \/    \/       \/      \/             \/        \/      
  ________                                   __                 
 /  _____/  ____   ____   ________________ _/  |_  ___________  
/   \  ____/ __ \ /    \_/ __ \_  __ \__  \\   __\/  _ \_  __ \ 
\    \_\  \  ___/|   |  \  ___/|  | \// __ \|  | (  <_> )  | \/ 
 \______  /\___  >___|  /\___  >__|  (____  /__|  \____/|__|    
        \/     \/     \/     \/           \/                    
```
### Apa itu Soal KaBaTaKu Generator?
Soal KaBaTaKu Generator adalah sebuah aplikasi yang berguna untuk membuat soal Kali, Bagi, Tambah dan Kurang (yang di sebut KaBaTaKu) dimana pada setiap soal kita tidak hanya mencari hasil tapi juga bisa mencari bilangan pertama atau bilangan kedua atau bisa juga mencari operator yang digunakan.

### Teknologi yang digunakan

untuk aplikasi ini teknologi yang digunakan adalah

| Kategori | Teknologi          |
|--------|----------------------|
| Bahasa | Javascript dan Jquery |
| Ui     | Bootstrap 5.1        |

### Fitur
1. Random Soal Generator
2. Penghitung Waktu Mundur

### Kekurangan Aplikasi
1. Kunci Jawaban Hanya 1 setiap soal
2. Belum Memiliki Penghitung Skor
3. Belum Memiliki Level Kesulitan Yang Bisa Di Atur

### Demo Aplikasi

{{< kabataku >}}

### Script
📜index.html
```html
<!DOCTYPE html>
<html>

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>KABATAKU</title>
  <link href="style.css" rel="stylesheet" type="text/css" />
  <script src="https://code.jquery.com/jquery-3.7.0.slim.js"
    integrity="sha256-7GO+jepT9gJe9LB4XFf8snVOjX3iYNb0FHYr5LI1N5c=" crossorigin="anonymous"></script>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
</head>

<body>
  <div class="container">
    <div class="card">
      <div class="card-header">
        Soal Ka Ba Ta Ku
      </div>
      <div class="card-body">
        <div class="input-group">
          <input type="text" max="3" id="a1" aria-label="angka1" class="form-control">
          <input type="text" max="3" id="kabataku" aria-label="kabataku" class="form-control">
          <input type="text" max="3" id="a2" aria-label="angka2" class="form-control">
          <span class="input-group-text">=</span>
          <input type="text" max="3" id="hasil" aria-label="hasil" class="form-control">
        </div>
        <div class="batasatas">
          <button type="button" id="start" class="btn btn-success">Start</button>
          <button type="button" id="cekjawaban" class="btn btn-success">Cek Jawaban</button>
          <button type="button" id="stop" class="btn btn-danger">Stop</button>
          <button type="button" id="reset" onclick="buatsoal()" class="btn btn-primary">Soal Baru</button>
        </div>
      </div>

      <div class="card-footer">
        <div class="input-group float-right">
          <input class="timer__hours form-control" type="number" min="0" max="48" value="00">
          <span class="input-group-text">:</span>
          <input class="timer__minutes form-control" type="number" min="0" max="59" value="00">
          <span class="input-group-text">:</span>
          <input class="timer__seconds form-control" type="number" min="0" max="59" value="00">
        </div>
      </div>
    </div>
  </div>


  <!-- stop editing -->
  <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
  <script src="script.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
    integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
    crossorigin="anonymous"></script>
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
    integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
    crossorigin="anonymous"></script>

</body>

</html>
```

📜style.css
```css
html {
  height: 100%;
  width: 100%;
}

body {
  padding-top: 10px;
}

.soal {
  width: 2rem;
}

.batasatas {
  padding-top: 10px;
}
```

📜script.js
```javascript
let operator = ["*", "/", "+", "-"];
var kabataku = "+";
var a1 = 0;
var a2 = 0;
var hasil = 0;
var acak = 0;
var jam = 0
var menit = 0
var detik = 15

function benar() {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: 'Hebat, Jawaban mu benar',
    showConfirmButton: false,
    timer: 1500
  })
}

function salah() {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'salah',
    showConfirmButton: false,
    timer: 1500
  })
}

function cekjawaban() {
  switch (acak) {
    case 0:
      console.log($("#a1").val());
      if (String($("#a1").val()) === String(a1)) {
        benar()
      } else {
        salah()
      }
      break;
    case 1:
      console.log($("#a2").val());
      if (String($("#a2").val()) === String(a2)) {
        benar()
      } else {
        salah()
      }
      break;
    case 2:
      console.log($("#kabataku").val());
      if (String($("#kabataku").val()) === String(kabataku)) {
        benar()
      } else {
        salah()
      }
      break;
    case 3:
      console.log($("#hasil").val());
      if (String($("#hasil").val()) === String(hasil)) {
        benar()
      } else {
        salah()
      }
      break;
    default:
      console.log("cek error")
  }
  $("button#start").show()
  $("button#stop").hide()
  clearInterval(timerInterval);
}

function habiswaktu() {
  $("#a1").val("");
  $("#a2").val("");
  $("#kabataku").val("");
  $("#hasil").val("");
  $(".timer__hours").val(jam);
  $(".timer__minutes").val(menit);
  $(".timer__seconds").val(detik);
  $("button#start").show()
  $("button#stop").hide()
  clearInterval(timerInterval);
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: 'Habis waktu',
    showConfirmButton: false,
    timer: 1500
  })
  buatsoal()
}

function cekdesimal(n) {
  var result = (n - Math.floor(n)) !== 0;
  console.log(result)
  return result;
}

function buatsoal() {
  a1 = Math.floor(Math.random() * 11);
  a2 = Math.floor(Math.random() * 11);
  kabataku = operator[Math.floor(Math.random() * operator.length)]
  switch (kabataku) {
    case "/":
      hasil = a1 / a2
      cek = cekdesimal(hasil)
      if (cek === true) {
        buatsoal()
      }
      break;
    case "*":
      hasil = a1 * a2
      break;
    case "-":
      hasil = a1 - a2
      break;
    case "+":
      hasil = a1 + a2
      break;
    default:
      console.log("hasil error")
  }
  // alert(typeof hasil)
}


$("button#start").click(function() {
  acak = Math.floor(Math.random() * 4);
  switch (acak) {
    case 0:
      // $("#a1").val(a1);
      $("#a2").val(a2);
      $("#kabataku").val(kabataku);
      $("#hasil").val(hasil);
      break;
    case 1:
      $("#a1").val(a1);
      // $("#a2").val(a2);
      $("#kabataku").val(kabataku);
      $("#hasil").val(hasil);
      break;
    case 2:
      $("#a1").val(a1);
      $("#a2").val(a2);
      // $("#kabataku").val(kabataku);
      $("#hasil").val(hasil);
      break;
    case 3:
      $("#a1").val(a1);
      $("#a2").val(a2);
      $("#kabataku").val(kabataku);
      // $("#hasil").val(hasil);
      break;
    default:
      console.log("hide error")
  }
  $("button#start").hide()
  $("button#stop").show()

  timerInterval = setInterval(function() {

    var seconds = $(".timer__seconds").val();
    var minutes = $(".timer__minutes").val();
    var hours = $(".timer__hours").val();

    $(".timer__seconds").val(seconds - 1);

    if (seconds <= 0) {
      $(".timer__seconds").val(59);
      $(".timer__minutes").val(minutes - 1);
    }

    if (minutes <= 0) {
      $(".timer__minutes").val(59);
      $(".timer__hours").val(minutes - 1);
    }

    if (hours <= 0) {
      $(".timer__hours").val(0);
    }

    if (hours <= 0 && minutes <= 0) {
      $(".timer__hours").val(0);
      $(".timer__minutes").val(0);
    }

    if (hours <= 0 && minutes <= 0 && seconds <= 0) {
      $(".timer__hours").val(0);
      $(".timer__minutes").val(0);
      $(".timer__seconds").val(0);
      habiswaktu()
    }

  }, 1000);

});


$("button#stop").click(function() {
  $("button#start").show()
  $("button#stop").hide()
  clearInterval(timerInterval);
});

$("button#reset").click(function() {
  $("#a1").val("");
  $("#a2").val("");
  $("#kabataku").val("");
  $("#hasil").val("");
  $(".timer__hours").val(jam);
  $(".timer__minutes").val(menit);
  $(".timer__seconds").val(detik);
  $("button#start").show()
  $("button#stop").hide()
  clearInterval(timerInterval);
});

$("button#cekjawaban").click(function() {
  cekjawaban();
});

$(document).on('keypress', function(e) {
  if (e.which == 13) {
    cekjawaban();
  }
});


$(document).ready(function() {
  $("button#stop").hide();
  $(".timer__seconds").val(detik);
  $(".timer__minutes").val(menit);
  $(".timer__hours").val(jam);
  buatsoal()
});
```