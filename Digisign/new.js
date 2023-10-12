var url = "https://script.google.com/macros/s/AKfycbzvp1p3HfPdkIzY2kImPc1qTOtsu5P2WjtQGIxYPukfHe5EUDse5NtiaQ3s6YLgLyGX/exec"
function form_display_hour() {
  if (document.getElementById("fallday").checked) {
    document.getElementById("fhourdiv").style.display = "none";
  } else {
    document.getElementById("fhourdiv").style.display = "flex";
  }
}

function form_init() {
  const today = new Date().toISOString();
  const date = today.split("T")[0];
  document.getElementById("fdate").min = date;
  document.getElementById("fstart").step = 900;
  document.getElementById("fend").step = 900;
}

function time_step_str(date, step) {
  var minutes = date.getMinutes() + step;
  var hours = date.getHours() + Math.floor(minutes / 60);
  minutes %= 60;
  hour = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  return `${hours}:${minutes}`;
}

function form_validate_hour() {
  const start = document.getElementById("fstart");
  const end = document.getElementById("fend");

  var startDate = new Date();
  var endDate = new Date();

  startDate.setHours(...start.value.split(":").map(Number));

  if (end.value === "") {
    end.value = time_step_str(startDate, Number(end.step) / 60);
  }

  endDate.setHours(...end.value.split(":").map(Number));

  if (startDate > endDate) {
    end.value = time_step_str(startDate, Number(end.step) / 60);
  }
}

// form_init();


// ----------------------------------------------------
const canvas = document.querySelector("canvas");

const signaturePad = new SignaturePad(canvas, {
  backgroundColor: "rgb(255,255,255)"
});

function make_base(url) {
  base_image = new Image();
  base_image.src = url;
  base_image.onload = function() {
    context.drawImage(base_image, 0, 0);
  }
}

$("#submitdatattd").click(function() {
  $("button#submitdatattd").hide();
  $.get(url + `?page=insert&dokumen=${$("input#Dokumen").val()}&nomor=${$("input#Nomor").val()}&type=${$("input#Type").val()}&date=${$("input#Date").val()}&sginby=${$("input#Nama").val()}&untuk=${$("input#Untuk").val()}`, function(data, status) {
    $('input').attr('readonly', true);
    $("div#ttd").removeClass("hide");


    context = canvas.getContext('2d');

    canvas.width = $("#Dokumen").width() + 50;


    // ----------------
    const toDataURL = url => fetch(url)
      .then(response => response.blob())
      .then(blob => new Promise((resolve, reject) => {
        const reader = new FileReader()
        reader.onloadend = () => resolve(reader.result)
        reader.onerror = reject
        reader.readAsDataURL(blob)
      }))


    toDataURL("https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=" + data.result)
      .then(dataUrl => {
        make_base(dataUrl);
      })
  });
})

$("#downloadttd").click(function() {
  var data = signaturePad.toDataURL();
  console.log(data)
  downloadBase64File(data, $("input#Dokumen").val());
})

function downloadBase64File(base64Data, fileName) {
  const linkSource = base64Data;
  const downloadLink = document.createElement("a");
  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
}