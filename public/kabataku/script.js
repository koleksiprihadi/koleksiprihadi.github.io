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
  buatsoal();
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
    $("#a1").val("");
    $("#a2").val("");
    $("#kabataku").val("");
    $("#hasil").val("");
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