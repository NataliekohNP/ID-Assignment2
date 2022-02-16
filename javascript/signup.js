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
        
        var successsignup = false;
        $("#sign-up-submit").on("click", function(e){
          successsignup = false;
          e.preventDefault();
          let username = $("#name").val();
          let email = $("#email").val();
          let password = $("#password").val();
          //checks if the input boxes are filled up
          if(username == "" || email == "" || password == ""){
            alert("Please fill in all the boxes");
            
          }
          for (var i = 0; i < response.length; i++) {
            //checks if username is already in database
            if(username == response[i].Username){
              successsignup = true;
              alert("Please enter a different username, or if you signed up please go to login instead");
            }
            //checks if password is already in databse
            if(password == response[i].Password){
              successsignup = true;
              
              alert("Please enter a different password, or if you signed up please go to login instead");
            }
            // checks if email is already in database
            if(email == response[i].Email){
              successsignup = true;
              alert("Please enter a different email, or if you signed up please go to login instead");
            }
            
            
            
          }
          // if all username, email and password is already in database, they will sign up the user
          if(successsignup == false){
            adduser();
          }

          
        })
        // login button function
        $("#login-submit").on("click", function(e){
          e.preventDefault();
          window.location.href="../html/login.html";
        })
  
  
       
        
    
      });
//adds the user into the database
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
            window.location.href = "../html/login.html"
            
          });
      
    
    
      }
      
      
    })