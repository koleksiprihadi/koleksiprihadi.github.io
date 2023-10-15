---
draft: false
date: 2023-10-14T18:44:21Z
title: "Sistem Tanda Tangan Digital Dan Verifikasi Keaslian Dokumen"
slug: sistem-tanda-tangan-digital-dan-verifikasi-keaslian-dokumen

tags:
    - JavaScript
    - Html
    - Css

categories:
    - Portofolio

authorname: "krisna prihadiyanto"
authorlink: "https://koleksiprihadi.github.io/"

authorname: "krisna prihadiyanto"
authorlink: "https://koleksiprihadi.github.io/"
authorphoto: "https://koleksiprihadi.github.io/images/koleksiprihadi.jpeg"

image: /digital-signature/DigiSign.png
thumbnail: /digital-signature/DigiSign.png
width: 1024
height: 576
description: "Sistem tanda tangan digital dan verifikasi keaslian dokumen"
repos: "koleksiprihadi/"

---
{{< js >}}
<script>
// foto
var foto =[
  "/digital-signature/DigiSign.png",
  "/digital-signature/DigiSign1.png",
  "/digital-signature/DigiSign2.png"
]
// Persen
var githubAkun = "koleksiprihadi"
var repo = "Sttdvkd"

// Demo
var file = [
      {
        type: 'html',
        url: 'index.html',
        content: `<link href="/css/bs/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">
        <link href="/css/style.css" rel="stylesheet" type="text/css" />
        <div class="position-absolute top-50 start-50 translate-middle">
          <h1 class="badge">
            <span class="text-light">Live</span>
            <span class="text-primary">Demo</span>
            <a href="https://koleksiprihadi.github.io/digital-signature/" class="btn btn-light" target="_blank">Link</a>
          </h1>
        </div>`
      },
      {
        type: 'css',
        url: 'style.css'
      },
      {
        type: 'js',
        url: 'script.js'
      }
    ]
  </script>
{{< /js >}}

Sistem tanda tangan digital dan verifikasi dokumen ini merupakan sebuah sistem aplikasi berbasis web untuk membuat sebuah tanda tangan digital seperti pada gambar dibawah ini dimana tidak hanya dalam bentuk Qr Code tapi juga pada sebelah kanannya terdapat tanda tangan dalam bentuk coretan.
Dan sistem aplikasi ini juga bisa digunakan untuk memeriksa keaslian dari sebuah file yang sudah di daftarkan pada saat membuat tanda tangan digital, dimana sistem aplikasi ini akan mampu mendeteksi apakah file sudah diedit atau belum.
Untuk cara penggunaan dari aplikasi ini, hanya cukup mengisi form yang telah di sediakan dan selanjutnya silahkan untuk menekan tombol save, maka akan muncul sebuah signature pad beserta qrcode yang sudah di generate, jika sudah selesai menggambar tanda tangan silahkan untuk mendownload tanda tangan daninsertkan kedalam dokumen, selanjutnya setelah dokumen telah di insertkan tanda tangan tadi silahkan untuk mengupload pada form pada halaman aplikasi yang akan muncul setelah menekan tombol download tanda tangan
penguploadan ini dilakukan untuk mendaftarkan file yang sudah di berikan tanda tangan.
![Digisign](https://koleksiprihadi.github.io/digital-signature/DigiSign3.jpeg)