$(document).ready(function () {
  //gets data from database
    var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data= {}, tmp;
    for (var i= 0, l = params.length; i < l; i++){
        tmp=params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    id=data.id 
    let settings = {
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

      $("#homebutton").on("click", function(e){
        e.preventDefault();
        window.location.href="../html/landingpage.html?id="+data.id;
      
      })
      
      $.ajax(settings).done(function (response) {
        console.log(response);
        let userlist = [];
        let username = "";
        //stores the users username and points in the array to compare
        for (var i = 0; i < response.length-1; i++) {
            let users = [response[i].points,response[i].Username];
            userlist.push(users);
            if(data.id == response[i]._id){
                username = response[i].Username;
            }
          }
        //shows the top three points in the game
        //sorts the array according to the points
        userlist.sort((a,b) => b[0] - a [0]);
        document.getElementById("username1").innerHTML = userlist[0][1];
        document.getElementById("score1").innerHTML = userlist[0][0];

        document.getElementById("username2").innerHTML = userlist[1][1];
        document.getElementById("score2").innerHTML = userlist[1][0];

        document.getElementById("username3").innerHTML = userlist[2][1];
        document.getElementById("score3").innerHTML = userlist[2][0];
          for(var x = 0; x < userlist.length; x++){
              console.log(username);
              console.log(userlist[x][1]);
              if(username == userlist[x][1]){
                  document.getElementById("username-user").innerHTML = userlist[x][1];
                  document.getElementById("score-user").innerHTML = userlist[x][0];
                  document.getElementById("position-user").innerHTML= x+1;
              }
          }

        
        console.log(userlist);
        
    
      });  
})