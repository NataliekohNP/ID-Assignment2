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
  
  $("#login-submit").on("click", function(e){
    e.preventDefault();
    getUsers();
  })
  function getUsers(all = true) {

    //[STEP 7]: Create our AJAX settings
    let settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://userdata-6076.restdb.io/rest/userlogin",
      "method": "GET", //[cher] we will use GET to retrieve info
      "headers": {
        "content-type": "application/json",
        "x-apikey": "61fb6b74fd4d376be83fe021",
        "cache-control": "no-cache"
      },
    }
    let loginsuccess = false;
    let username = $("#name").val();
    let password = $("#password").val();
   
    $.ajax(settings).done(function (response) {
      
      let content = "";

      for (var i = 0; i < response.length; i++) {
          
        if((username == response[i].Username || username == response[i].Email) && password == response[i].Password){
            loginsuccess = true;
        }
        
      }
      if(loginsuccess == true){
          window.location.href = "../html/landingpage.html"
      }

      //[STEP 9]: Update our HTML content
      //let's dump the content into our table body
      $("#contact-list tbody").html(content);

      $("#total-contacts").html(response.length);
    });


  }
})
