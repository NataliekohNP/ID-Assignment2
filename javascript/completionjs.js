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
          
        if(data.id == response[i].userid && data.subject == response[i].charactername){
          characterunlock = true;
          
        }
      }
      
      if(characterunlock == false){
        document.getElementById("wordsofaccomplishment").innerHTML = "Character unlocked!";
        if(data.subject == "english"){
          document.getElementById("completechar").src = "../images/english_char.png";
        }
        else if(data.subject == "maths"){
          document.getElementById("completechar").src = "../images/math_char.png";
        }
        else if(data.subject == "chemistry"){
          document.getElementById("completechar").src = "../images/biology_char.png";
        }
        else if(data.subject == "biology"){
          document.getElementById("completechar").src ="../images/chemistry_char.png";
        }
    
        
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
      else{
        document.getElementById("wordsofaccomplishment").innerHTML="Character unlocked already!";
        if(data.subject == "english"){
          document.getElementById("completechar").src = "../images/english_char.png";
        }
        else if(data.subject == "maths"){
          document.getElementById("completechar").src = "../images/math_char.png";
        }
        else if(data.subject == "chemistry"){
          document.getElementById("completechar").src = "../images/biology_char.png";
        }
        else if(data.subject == "biology"){
          document.getElementById("completechar").src ="../images/chemistry_char.png";
        }
      }
    
  })
  
  
  
  
 setTimeout(function () {
    
    window.location.href = "../html/landingpage.html?id="+data.id; //will redirect to your blog page (an ex: blog.html)
 }, 4000);
})
