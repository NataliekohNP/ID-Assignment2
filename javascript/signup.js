$(document).ready(function () {
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://userdata-6076.restdb.io/rest/userlogin",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "x-apikey": "61fb6b74fd4d376be83fe021",
          "cache-control": "no-cache"
        }
      }
      
      $.ajax(settings).done(function (response) {
        console.log(response);
    
    
      });
      
      $("#sign-up-submit").on("click", function(e){
        e.preventDefault();
        adduser();
      })

      $("#login-submit").on("click", function(e){
        e.preventDefault();
        window.location.href="../html/login.html";
      })


     
      function adduser(all = true) {
        let username = $("#name").val();
        let email = $("#email").val();
        let password = $("#password").val();
  
        let jsondata={
            "Username" : username,
            "Email": email,
            "Password":password,
            "points":0
        };
        //[STEP 7]: Create our AJAX settings
        let settings = {
          "async": true,
          "crossDomain": true,
          "url": "https://userdata-6076.restdb.io/rest/userlogin",
          "method": "POST", //[cher] we will use GET to retrieve info
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
            window.location.href = "../html/login.html"
            
          });
      
    
    
      }
    })