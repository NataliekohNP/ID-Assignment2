
var modal = document.getElementById("myModal1");
var btn = document.getElementById("qn1bttn");
var span = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById("myModal2");
const btn2 = document.getElementById("qn2bttn");
var span2 = document.getElementsByClassName("close2")[0];

var modal3 = document.getElementById("myModal3");
var btn3 = document.getElementById("qn3bttn");
var span3 = document.getElementsByClassName("close3")[0];

var modal4 = document.getElementById("myModal4");
var btn4 = document.getElementById("qn4bttn");
var span4 = document.getElementsByClassName("close4")[0];
let points = 0;
let levelnum = [];
let ques= "";

$(document).ready(function () {
    var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data= {}, tmp;
    for (var i= 0, l = params.length; i < l; i++){
        tmp=params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    let settings2 = {
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
      
      $.ajax(settings2).done(function (response) {
        console.log(response);
        for (var i = 0; i < response.length; i++) {
          
            if(data.id == response[i]._id){
              points = response[i].points;
              console.log(points);
            }
          }
    
      });
    
      

console.log(data.subject);
    let url2 = "https://study-00ab.restdb.io/rest/" + data.subject;

    console.log(url2);
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": url2,
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": "6202058c1b941c73ff397993",
          "cache-control": "no-cache"
        },
    }
    
    $.ajax(settings).done(function (response) {
        
        console.log(response);
        for(var i = 0; i<response.length; i++){
            if(response[i].level == data.level){
                console.log(response[i]);
                levelnum.push(i);
            }
        }
        
        ques = response[levelnum[0]].questions
        btn.onclick = function() {
            modal.style.display = "block";
            document.getElementById('question').innerHTML = ques;
            document.getElementById('option11').innerHTML = response[levelnum[0]].answers;
            document.getElementById('option12').innerHTML = response[levelnum[0]].option1;
            document.getElementById('option13').innerHTML = response[levelnum[0]].option2;
            document.getElementById('option14').innerHTML = response[levelnum[0]].option3;

            document.getElementById('option1_1').value = response[levelnum[0]].answers;
            document.getElementById('option1_2').value = response[levelnum[0]].option1;
            document.getElementById('option1_3').value = response[levelnum[0]].option2;
            document.getElementById('option1_4').value = response[levelnum[0]].option3;
            document.getElementById("ann1").style.visibility="hidden";
            document.getElementById("answer").innerHTML ="";
        }
        
        span.onclick=function() {
            modal.style.display="none";
        }
        
        window.onclick = function(event) {
            if (event.target == modal ) {
                modal.style.display = "none";
            }
        }
    
        btn2.onclick = function() {
            modal2.style.display = "block";
            document.getElementById('question2').innerHTML = response[levelnum[1]].questions;
            document.getElementById('option21').innerHTML = response[levelnum[1]].option1;
            document.getElementById('option22').innerHTML = response[levelnum[1]].answers;
            document.getElementById('option23').innerHTML = response[levelnum[1]].option2;
            document.getElementById('option24').innerHTML = response[levelnum[1]].option3;

            document.getElementById('option2_1').value = response[levelnum[1]].option1;
            document.getElementById('option2_2').value = response[levelnum[1]].answers;
            document.getElementById('option2_3').value = response[levelnum[1]].option2;
            document.getElementById('option2_4').value = response[levelnum[1]].option3;
            document.getElementById("ann2").style.visibility="hidden";
            document.getElementById("answer2").innerHTML ="";
            
        }
        
        span2.onclick=function() {
            modal2.style.display="none";
        }
        
        window.onclick = function(event) {
            if (event.target == modal2 ) {
                modal2.style.display = "none";
            }
        }
      
      btn3.onclick = function() {
          modal3.style.display = "block";
          document.getElementById('question3').innerHTML = response[levelnum[2]].questions;
          document.getElementById('option31').innerHTML = response[levelnum[2]].option1;
            document.getElementById('option32').innerHTML = response[levelnum[2]].option3;
            document.getElementById('option33').innerHTML = response[levelnum[2]].option2;
            document.getElementById('option34').innerHTML = response[levelnum[2]].answers;

            document.getElementById('option3_1').value = response[levelnum[2]].option1;
            document.getElementById('option3_2').value = response[levelnum[2]].option3;
            document.getElementById('option3_3').value = response[levelnum[2]].option2;
            document.getElementById('option3_4').value = response[levelnum[2]].answers;
            document.getElementById("ann3").style.visibility="hidden";
            document.getElementById("answer3").innerHTML ="";
      }
      
      span3.onclick=function() {
          modal3.style.display="none";
      }
      
      window.onclick = function(event) {
          if (event.target == modal3 ) {
              modal3.style.display = "none";
          }
      }


      btn4.onclick = function() {
        modal4.style.display = "block";
        document.getElementById('question4').innerHTML = response[levelnum[3]].questions;
        document.getElementById('option41').innerHTML = response[levelnum[3]].option1;
            document.getElementById('option42').innerHTML = response[levelnum[3]].option3;
            document.getElementById('option43').innerHTML = response[levelnum[3]].option2;
            document.getElementById('option44').innerHTML = response[levelnum[3]].answers;

            document.getElementById('option4_1').value = response[levelnum[3]].option1;
            document.getElementById('option4_2').value = response[levelnum[3]].option3;
            document.getElementById('option4_3').value = response[levelnum[3]].option2;
            document.getElementById('option4_4').value = response[levelnum[3]].answers;
            document.getElementById("ann4").style.visibility="hidden";
            document.getElementById("answer4").innerHTML ="";
    }
    
    span4.onclick=function() {
        modal4.style.display="none";
    }
    
    window.onclick = function(event) {
        if (event.target == modal4 ) {
            modal4.style.display = "none";
        }
    }


    $("#submit1").on("click", function(e){
        e.preventDefault();
        
        var options = document.getElementsByName('option1');
        for(i = 0; i<options.length; i++){
            if(options[i].checked){
                
               if(options[i].value == response[levelnum[0]].answers) {
                   points ++;
                   document.getElementById("ann1").style.visibility="visible";
                   document.getElementById("answer").style.visibility = "hidden";
                   $("#myModal1").fadeOut(600);
                   console.log(points);
                   btn2.removeAttribute("disabled");
                   
               }
               else{
                   
                   document.getElementById("answer").innerHTML = "The correct answer is : "+ response[levelnum[0]].answers;
                   options[i].checked = false

                   $("#myModal1").fadeOut(600);
                   break;
               }
            }
        }
      })

      $("#submit2").on("click", function(e){
        e.preventDefault();
        var options = document.getElementsByName('option2');
        for(i = 0; i<options.length; i++){
            if(options[i].checked){
               if(options[i].value == response[levelnum[1]].answers) {
                   points ++;
                   document.getElementById("ann2").style.visibility= "visible";
                   document.getElementById("answer2").style.visibility = "hidden";
                   $("#myModal2").fadeOut(600);
                   console.log(points);
                   btn3.removeAttribute("disabled");
                   
               }
               else{
                   
                   document.getElementById("answer2").innerHTML = "The correct answer is : "+ response[levelnum[1]].answers;
                   options[i].checked = false

                   $("#myModal2").fadeOut(600);
                   
                   console.log(points);
                   break;
                   
               }
               
            }
        }
      })

      $("#submit3").on("click", function(e){
        e.preventDefault();
        var options = document.getElementsByName('option3');
        for(i = 0; i<options.length; i++){
            if(options[i].checked){
               if(options[i].value == response[levelnum[2]].answers) {
                   points ++;
                   document.getElementById("ann3").style.visibility="visible";
                   document.getElementById("answer3").style.visibility = "hidden";
                   $("#myModal3").fadeOut(600);
                   console.log(points);
                   btn4.removeAttribute("disabled");
                   
               }
               else{
                   
                   document.getElementById("answer3").innerHTML = "The correct answer is : "+ response[levelnum[2]].answers;
                   options[i].checked = false

                   $("#myModal3").fadeOut(600);
                   break;
               }
               
            }
        }
      })
let finished = false;
      $("#submit4").on("click", function(e){
        e.preventDefault();
        var options = document.getElementsByName('option4');
        for(i = 0; i<options.length; i++){
            if(options[i].checked){
               if(options[i].value == response[levelnum[3]].answers) {
                   points ++;
                   document.getElementById("ann4").style.visibility="visible";
                   document.getElementById("answer4").style.visibility = "hidden";
                   $("#myModal4").fadeOut(600);
                   console.log(points);
                   finished = true;
                   addpoints();
               }
               else{
                   
                   document.getElementById("answer4").innerHTML = "The correct answer is : "+ response[levelnum[3]].answers;
                   options[i].checked = false

                   $("#myModal4").fadeOut(600);
                   break;
               }
               
            }
        }


      })
      let id = "";
      let username = "";
      let email = "";
      let password = "";
     
      $("#back").on("click", function(e){
        
        addpoints();
  
      });


      function addpoints(){
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
          
          for (var i = 0; i < response.length; i++) {
            
              if(data.id == response[i]._id){
                username = response[i].Username;
                password = response[i].Password;
                email = response[i].Email;
                
              }
            }
           
          id = data.id;
          updateDetails(id,username, password, email);
          
        });
      }

     

      function updateDetails(id,username, password, email){
          console.log(points);
        var jsondata={
            "Username" : username,
            "Email": email,
            "Password":password,
            "points": points
        }
        let settings3 = {
            "async": true,
            "crossDomain": true,
            "url": "https://userdata-6076.restdb.io/rest/userlogin/"+id,
            "method": "PUT", 
            "headers": {
              "content-type": "application/json",
              "x-apikey": "61fb6b74fd4d376be83fe021",
              "cache-control": "no-cache"
            },
            "processData": false,
            "data": JSON.stringify(jsondata)
            
          }
          $.ajax(settings3).done(function (response) {
              console.log(response);

              if(finished = false){
                url = "../html/landingpage.html?id="+data.id;
                window.location.href = url;
              }
              else{
                window.location.href = "../html/completion.html?subject="+data.subject+"&id="+data.id;
              }
              
            });
      }



    
    });
      
      
      



})


      
     