let sbj = "";
$(document).ready(function () {
    var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data= {}, tmp;
    for (var i= 0, l = params.length; i < l; i++){
        tmp=params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    sbj = data.subject;
    $("#primary").on("click", function(e){
        e.preventDefault();
        let url = 'quiz.html?subject='+sbj+'&level=Primary';
        window.location.href = url;
      })

      $("#secondary").on("click", function(e){
        e.preventDefault();
        let url = 'quiz.html?subject='+sbj+'&level=Secondary';
        window.location.href = url;
      })
      $("#tertiary").on("click", function(e){
        e.preventDefault();
        let url = 'quiz.html?subject='+sbj+'&level=Tertiary';
        window.location.href = url;
      })
      

if(sbj == "english"){
    console.log(sbj)
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
        console.log(response);
      });

}

if(sbj == "math"){
    console.log(sbj)
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://study-00ab.restdb.io/rest/math",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": "6202058c1b941c73ff397993",
          "cache-control": "no-cache"
        },
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
      });
}

if(sbj == "biology"){
    console.log(sbj)
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://study-00ab.restdb.io/rest/biology",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": "6202058c1b941c73ff397993",
          "cache-control": "no-cache"
        },
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

if(sbj == "chemistry"){
    console.log(sbj)
    let settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://study-00ab.restdb.io/rest/chemistry",
        "method": "GET", //[cher] we will use GET to retrieve info
        "headers": {
          "content-type": "application/json",
          "x-apikey": "6202058c1b941c73ff397993",
          "cache-control": "no-cache"
        },
    }
    $.ajax(settings).done(function (response) {
        console.log(response);
      });
    }


    
})

