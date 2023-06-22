$.ajax({
  type: 'GET',
  url: `https://api.github.com/repos/${githubAkun}/${repo}/languages`,
  data: { get_param: 'value' },
  dataType: 'json',
  success: async function(data) {
    var key = Object.keys(data);
    var tot = 0
    for (i = 0; i < key.length; i++) {
      tot = tot + data[key[i]]
    }
    for (i = 0; i < key.length; i++) {
      switch(key[i].toUpperCase()){
        case "HTML":
          $("div#persen").append(
            `<!-- Start Persen -->
            <h5 class="badge text-warning-emphasis">HTML</h5>
            <div class="progress" role="progressbar" aria-label="Warning Default striped example" aria-valuenow="10"
              aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-bar-striped bg-warning" style="width: ${(data[key[i]]/tot)*100}%"></div>
            </div>
            <!-- End Persen -->`
          )
          break
        case "CSS":
          $("div#persen").append(
            `<!-- Start Persen -->
            <h5 class="badge text-warning">CSS</h5>
            <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10"
              aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-bar-striped bg-warning" style="width: ${(data[key[i]]/tot)*100}%"></div>
            </div>
            <!-- End Persen -->`
          )
          break
        case "JAVASCRIPT":
          $("div#persen").append(
            `<!-- Start Persen -->
            <h5 class="badge text-danger">JAVASCRIPT</h5>
            <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10"
              aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-bar-striped bg-danger" style="width: ${(data[key[i]]/tot)*100}%"></div>
            </div>
            <!-- End Persen -->`
          )
          break
        default:
          $("div#persen").append(
            `<!-- Start Persen -->
            <h5 class="badge text-primary">${key[i].toUpperCase()}</h5>
            <div class="progress" role="progressbar" aria-label="Default striped example" aria-valuenow="10"
              aria-valuemin="0" aria-valuemax="100">
              <div class="progress-bar progress-bar-striped" style="width: ${(data[key[i]]/tot)*100}%"></div>
            </div>
            <!-- End Persen -->`
          )
      }
    }
  }
});

for (a = 0; a < foto.length; a++) {
  if (a === 0) {
    $("div#fotoApp").append(
      `<div class="carousel-item active">
                <img src="${foto[a]}"
                  class="d-block img-fluid" alt="...">
              </div>`
    )
  } else {
    $("div#fotoApp").append(
      `<div class="carousel-item">
                <img src="${foto[a]}"
                  class="d-block img-fluid" alt="...">
              </div>`
    )
  }
}