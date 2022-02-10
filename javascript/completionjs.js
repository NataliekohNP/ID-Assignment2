$(document).ready(function () {
    var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data= {}, tmp;
    for (var i= 0, l = params.length; i < l; i++){
        tmp=params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
let characterunlock = false;


var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://userdata-6076.restdb.io/rest/characters",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "61fb6b74fd4d376be83fe021",
      "cache-control": "no-cache"
    }
  }
  
  $.ajax(settings).done(function (response) {
    console.log(response);
    for (var i = 0; i < response.length; i++) {
          
        if(data.id == response[i]._id){
          characterunlock = true;
        }
      }
    
  })

  if(characterunlock == false){
    var jsondata = {"charactername": data.subject,"userid": data.id};
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://userdata-6076.restdb.io/rest/characters",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "61fb6b74fd4d376be83fe021",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(jsondata)
    }
    
    $.ajax(settings).done(function (response) {
      console.log(response);
      
    });
  }
  
  $("#done").on("click", function(e){
    e.preventDefault();
    window.location.href="../html/landingpage.html?id="+data.id;
  
  })
})
