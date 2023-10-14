---
draft: false
date: 2023-06-24T03:08:48Z
title: "Soal Kabataku Generator"
slug: soal-kabataku-generator

tags:
    - Html
    - Css
    - Js
    - Jquery
    - Bootstrap 5.0.2

categories:
    - Portofolio

authorname: "krisna prihadiyanto"
authorlink: "https://koleksiprihadi.github.io/"

authorname: "krisna prihadiyanto"
authorlink: "https://koleksiprihadi.github.io/"
authorphoto: "https://koleksiprihadi.github.io/images/koleksiprihadi.jpeg"

image: /kabataku/kabataku.png
thumbnail: /kabataku/kabataku.png
width: 1280
height: 720
description: "Soal Ka Ba Ta Ku Generator"
repos: "koleksiprihadi/"

---
{{< js >}}
<script>
$('table').addClass("table table-striped");
// foto
var foto =[
  "/kabataku/kabataku.png",
  "/kabataku/kabataku-1.png",
  "/kabataku/kabataku-2.png"
]
// Persen
var githubAkun = "koleksiprihadi"
var repo = "soal-kabataku-generator"

// Demo
var file = [
      {
        type: 'html',
        url: 'https://raw.githubusercontent.com/koleksiprihadi/soal-kabataku-generator/main/index.html',
      },
      {
        type: 'css',
        url: 'https://raw.githubusercontent.com/koleksiprihadi/soal-kabataku-generator/main/style.css'
      },
      {
        type: 'js',
        url: 'https://raw.githubusercontent.com/koleksiprihadi/soal-kabataku-generator/main/script.js'
      }
    ]
  </script>
{{< /js >}}

Merupakan sebuah aplikasi untuk membuat sebuah soal matematika khususnya perkalian, pembagian, pertambahan dan pengurangan.

Soal yang dibuat oleh aplikasi ini tidak hanya mencari hasil dari operasi kali, bagi, tambah, kurang saja tapi juga akan mencari bilangan pertama atau bilanagn kedua atau juga operator yang digunakan.

Untuk lambang operator yang digunakan adalah sebagai berikut

| Operator | Lambang |
|----------|---------|
|Perkalian | * |
|Pembagian | / |
|Penjumlahan| + |
|pengurangan| - |