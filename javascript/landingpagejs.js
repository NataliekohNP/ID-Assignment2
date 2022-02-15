let id = "";
$(document).ready(function () {
  document.getElementById("english2").style.visibility = "hidden";
  document.getElementById("maths2").style.visibility = "hidden";
  document.getElementById("biology2").style.visibility = "hidden";
  document.getElementById("chemistry2").style.visibility = "hidden";
  var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data= {}, tmp;
    for (var i= 0, l = params.length; i < l; i++){
        tmp=params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    id=data.id
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
          
      if( id == response[i].userid ){
        if(response[i].charactername == 'english'){
          console.log("english");
          document.getElementById("english2").style.visibility = "visible";
        }
        if(response[i].charactername == 'maths'){
          console.log("maths");
          document.getElementById("maths2").style.visibility = "visible";
        }
        if(response[i].charactername == 'biology'){
          document.getElementById("biology2").style.visibility = "visible";
        }
        if(response[i].charactername == 'chemistry'){
          document.getElementById("chemistry2").style.visibility = "visible";
        }
      }
      
    }
  });
    
    $("#leaderboard_button").on("click", function(e){
      e.preventDefault();
      window.location.href = "leaderboard.html?id="+id;
    })
    $("#english").on("click", function(e){
        e.preventDefault();
        let url = "subject_level.html?subject=english&id="+id;
        window.location.href = url;
      })

      $("#maths").on("click", function(e){
        e.preventDefault();
        let url = "subject_level.html?subject=maths&id="+id;
        window.location.href = url;
      })
      $("#biology").on("click", function(e){
        e.preventDefault();
        let url = "subject_level.html?subject=science-biology&id="+id;
        window.location.href = url;
      })
      $("#chemistry").on("click", function(e){
        e.preventDefault();
        let url = "subject_level.html?subject=science-chemistry&id="+id;
        window.location.href = url;
      })
    });