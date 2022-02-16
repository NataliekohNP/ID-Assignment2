$(document).ready(function () {
  // this is to get the data from database 
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
  // here is to check if its connected
  $.ajax(settings).done(function (response) {
    console.log("connected to database");


  });
  // this is to direct the user to sign up page 
  $("#signup-submit").on("click", function(e){
    e.preventDefault();
    window.location.href="../html/signup.html";
  })
// to login function
  $("#login-submit").on("click", function(e){
    e.preventDefault();
    getUsers();
  })
  //this gets all user details from database
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
    let id = "";
    let loginsuccess = "false";
    let username = $("#name").val();
    let password = $("#password").val();
    //checks if all login text inputs are completed
    if(username == "" || password == ""){
      alert("Please fill in all the boxes");
      
    }
    
    $.ajax(settings).done(function (response) {
      
      let content = "";

      for (var i = 0; i < response.length; i++) {
        //checks if input boxes are filled and user details are inside the database
        if((username == response[i].Username || username == response[i].Email) && password == response[i].Password){
          id = response[i]._id;
          loginsuccess = "true";
        }
        //checks if data is correct (incorrect password or username or email)
        else if((username == response[i].Username || username == response[i].Email) && password != response[i].Password){
          alert("Incorrect password, please try again");
          loginsuccess = "incorrect";
          break;
          
        }
        else if((username != response[i].Username || username != response[i].Email) && password == response[i].Password){
          alert("Incorrect username or email, please try again");
          loginsuccess = "incorrect";
          break
        }
               
      }
      // if user details are not in database, they will have to go to sign up page 
      if(loginsuccess == "true"){
          window.location.href = "../html/landingpage.html?id="+id;
      }
      
      else if(loginsuccess == "false"){
        alert("Have you signed up yet?");
      }

      //[STEP 9]: Update our HTML content
      //let's dump the content into our table body
      $("#contact-list tbody").html(content);

      $("#total-contacts").html(response.length);
    });


  }
})
