$(document).ready(function() {
  alertvisitor();  
  $('nav').removeClass('navbar-down').addClass('navbar-up');
});
$(window).scroll(function() {
  if ($("html").scrollTop() === 0) {
    $('nav').removeClass('navbar-down').addClass('navbar-up');
  } else {
    $('nav').removeClass('navbar-up').addClass('navbar-down');
  }
});

function getCurrentURL () {
  return window.location.href
}

function alertvisitor(){
    var parser = new UAParser();
    let parserResults = parser.getResult();
    var data = {
      "url": window.location.href,
      "browser": parserResults.ua,
      "dVendor": parserResults.device.vendor,
      "dModel": parserResults.device.model,
      "dTipe": parserResults.device.type,
      "dOs": parserResults.os.name + parserResults.os.version
    }
    $.ajax({
      type: "GET",
      url: `https://script.google.com/macros/s/AKfycbyjyFGlN0v6ZtIraa58TUkQkA4AHK3suKMBC1gM68Kv_AU9CBcgvDNoB_mAVP2g8uXJTw/exec?action=analytic&data={
      "url": "${window.location.href}",
      "browser": "${parserResults.ua}",
      "dVendor": "${parserResults.device.vendor}",
      "dModel": "${parserResults.device.model}",
      "dTipe": "${parserResults.device.type}",
      "dOs": "${parserResults.os.name + parserResults.os.version}"
    }`,
    });
}