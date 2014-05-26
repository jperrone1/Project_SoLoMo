$(document).ready(function(){
  $('#new_post').on('submit', function(event){
    event.preventDefault();
    var form = $(this);
    var title = $('#post_title').val();
    var body = $('#post_body').val();

    $.ajax({
      // url: form.attr('action'),
      // method: form.attr('method'),
      url: "/posts",
      method: "post",
      data: {
        "post": {
          "title": title,
          "body": body
        }
      },
      dataType: "json",
      success: function(data) {
        console.log(data);
        var span = $('span')
        var post =  "<li><b>"+data.title+"</b> - " +data.body + "</li>";
        span.append(post);
        $(':text').val('');
      },
      error: function(){
        alert("Server no love you long time");
      }
    });
  });
});