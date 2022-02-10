let id = "";
$(document).ready(function () {
    var url = document.location.href,
    params = url.split('?')[1].split('&'),
    data= {}, tmp;
    for (var i= 0, l = params.length; i < l; i++){
        tmp=params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    id=data.id
    $("#leaderboard").on("click", function(e){
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