
var modal = document.getElementById("myModal1");
var btn = document.getElementById("qn1bttn");
var span = document.getElementsByClassName("close")[0];

var modal2 = document.getElementById("myModal2");
var btn2 = document.getElementById("qn2bttn");
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
    
    
      

if(data.subject == "english"){
    
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://study-00ab.restdb.io/rest/english",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": "6202058c1b941c73ff397993",
          "cache-control": "no-cache"
        },
    }
    
    $.ajax(settings).done(function (response) {
        
        
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
                   document.getElementById("answer").innerHTML = "Correct";
                   $("#myModal1").fadeOut(600);
                   console.log(points);
               }
               else{
                   
                   document.getElementById("answer").innerHTML = "The correct answer is : "+ response[levelnum[0]].answers;
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
                   document.getElementById("answer2").innerHTML = "Correct";
                   $("#myModal2").fadeOut(600);
                   console.log(points);
               }
               else{
                   
                   document.getElementById("answer2").innerHTML = "The correct answer is : "+ response[levelnum[1]].answers;
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
                   document.getElementById("answer3").innerHTML = "Correct";
                   $("#myModal3").fadeOut(600);
                   console.log(points);
               }
               else{
                   
                   document.getElementById("answer3").innerHTML = "The correct answer is : "+ response[levelnum[2]].answers;
                   break;
               }
               
            }
        }
      })

      $("#submit4").on("click", function(e){
        e.preventDefault();
        var options = document.getElementsByName('option4');
        for(i = 0; i<options.length; i++){
            if(options[i].checked){
               if(options[i].value == response[levelnum[3]].answers) {
                   points ++;
                   document.getElementById("answer4").innerHTML = "Correct";
                   $("#myModal4").fadeOut(600);
                   console.log(points);
               }
               else{
                   
                   document.getElementById("answer4").innerHTML = "The correct answer is : "+ response[levelnum[3]].answers;
                   break;
               }
               
            }
        }
      })

    
    });
      
      
      

}
})


      
     