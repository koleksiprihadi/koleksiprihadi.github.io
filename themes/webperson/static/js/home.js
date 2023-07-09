let intro = ["Programmer"];
let jsonurl = "/json/data.json";
new TypeIt("#ngetik", {
  speed: 200,
  loop: true,
  strings: intro,
  breakLines: false,
}).go();

$.ajax({
  type: "GET",
  url: "https://panduankoding.com/index.xml",
  dataType: "xml",
  success: xmlParser,
});

function cekImage(url) {
  if ((/https*/).test(url)) {
    return url;
  } else {
    return "https://panduankoding.com" + url;
  }
}

async function xmlParser(xml) {
  $("#load").fadeOut(3000);

  $(xml)
    .find("item")
    .each(function() {
      $("#artikelauto").append(
        `<div id="loadartikel" class="col-md-4 mx-auto p-2">
            <div class="card bg-light text-dark artikel">
              <img src="${cekImage($(this).find("image").text())}" class="placeholder figure-img img-fluid m-2"
                alt="${$(this).find("title").text()}">
              <div class="card-body">
                <div class="row g-0">
                  <div class="col-10">
                    <p class="card-text">
                      <i class="bi bi-book"></i>
                      ${$(this).find("title").text()}
                    </p>
                  </div>
                  <div class="col-2 mx-auto p-2">
                    <a href="${$(this)
          .find("link")
          .text()}" class="btn btn-primary rounded-pill" target="_blank">
                      <i class="bi bi-box-arrow-up-right"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>`
      );
      $("#loadartikel").fadeIn(1000);
    });
}

$.ajax({
  type: "GET",
  url: jsonurl,
  data: { get_param: "value" },
  dataType: "json",
  success: function(data) {
    for (let i = 0; i < data.kerjaan.length; i++) {
      $("div#cardkerja").append(
        `<!-- Start Card Kerja -->
        <div class="card mb-3 kerja">
          <div class="row g-0">
            <div class="col-md-4">
              <div class="card text-bg-primary m-2">
                <div class="card-body">
                  <h3 class="card-title text-light">${data.kerjaan[i].posisi}</h3>
                  <p class="card-text">
                    ${data.kerjaan[i].tipe} <br>
                  </p>
                  <h5>${data.kerjaan[i].waktu}<br><span class="badge bg-light text-dark">${data.kerjaan[i].tipewaktu}</span></h5>
                </div>
              </div>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-light">${data.kerjaan[i].perusahaan}</h5>
                <p class="card-text">${data.kerjaan[i].deskripsi}</p>
              </div>
            </div>
          </div>
        </div>
        <!-- End Card Kerja -->`
      );
    }
  },
});

$(".carousel .carousel-item").each(function() {
  var minPerSlide = 4;
  var next = $(this).next();
  if (!next.length) {
    next = $(this).siblings(":first");
  }
  next.children(":first-child").clone().appendTo($(this));

  for (var i = 0; i < minPerSlide; i++) {
    next = next.next();
    if (!next.length) {
      next = $(this).siblings(":first");
    }
    next.children(":first-child").clone().appendTo($(this));
  }
});

$("div#hide").hide();

function validateEmail($email) {
  var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
  return emailReg.test($email);
}

$("#kirim").click(function() {

  var nama, email, subjek, pesan;

  if ($("input#nama").val() === "") {
    $("input#nama").addClass("is-invalid");
  } else {
    nama = $("input#nama").val();
  }
  if (
    $("input#email").val() === "" ||
    validateEmail($("input#email").val()) === false
  ) {
    $("input#email").addClass("is-invalid");
  } else {
    email = $("input#email").val();
  }
  if ($("input#subject").val() === "") {
    $("input#subject").addClass("is-invalid");
  } else {
    subjek = $("input#subject").val();
  }
  if ($("textarea#pesan").val() === "") {
    $("textarea#pesan").addClass("is-invalid");
  } else {
    pesan = $("textarea#pesan").val();
  }
  if (typeof nama !== 'undefined' && typeof email !== 'undefined' && typeof subjek !== 'undefined' && typeof pesan !== 'undefined') {
    var emailkirim = email + " (" + nama + ")"
    $.ajax({
      type: 'GET',
      url: `https://script.google.com/macros/s/AKfycbyjyFGlN0v6ZtIraa58TUkQkA4AHK3suKMBC1gM68Kv_AU9CBcgvDNoB_mAVP2g8uXJTw/exec?action=contact&data={
      "url": "${window.location.href}",
      "email": "${emailkirim}",
      "subject": "${subjek}",
      "pesan": "${pesan}"
      }`,
      success: function(data) {
        swal({
          icon: 'success',
          title: `Status Terkirim : ${data.message}`,
          text: `Terimakasih telah menghubungi saya, saya akan merespon pesan anda pada email ${data.result.email} segera`,
        })
      }
    })
  }
});
