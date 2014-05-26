$(document).ready(function(){ 

  $('#new_post').on('submit', function(event){
    event.preventDefault();
    var form = $(this);
    var title = $('#post_title').val();
    var body = $('#post_body').val();
    this.reset();

    $.ajax({
      // url: form.attr('action'),
      // method: form.attr('method'),
      url: "/posts",
      method: "post",
      data: {
        "post": {
          "title": title,
          "body": body
        } //post
      }, //data
      dataType: "json",
      success: function(data) {
        console.log(data);
        var span = $('.post_1')
        var post =  "<li><b>"+data.title+"</b> - " +data.body + '<button class="delete" type="submit">' + 'Delete</button>' +'</li>';
        span.append(post);
        $('post').val('');
      }, //success
      error: function(){
        alert("Server no love you long time");
      } //error
    }); // AJAX CLOSURE
  // }); // new post submit event closure

  
    //   $.ajax({
    //   // url: form.attr('action'),
    //   // method: form.attr('method'),
    //   url: "/posts.json",
    //   method: "get",
    //   data: {
    //     "post": {
    //       "title": title,
    //       "body": body
    //     } //post
    //   }, //data
    //   // dataType: "json",
    //   success: function(data) {
    //     // console.log(data);
    //     var postShow = $('#post_show')
    //     var postString =  "<li><b>"+data.title+"</b> - " +data.body + "</li>";
    //     postShow.append(postString);
    //     // $("#posts").append(postString);
    //   }, //success
    //   error: function(){
    //     alert("Server no love you long time");
    //   } //error
    // }); // AJAX CLOSURE



  }); // new post submit event closure

    var loadPosts = function() {
      $.ajax('/posts.json', {type: 'get'}).success(function(data){
        for (var i in data) {
          $('.post_1').append('<li id=' + data[i]["id"] + '>' + data[i]["title"] + ' - ' + data[i]["body"] + ' ' + '<button class="delete" type="submit">' + 'Delete </button>' +'</li>' );
        }
      });
    }
    loadPosts();

}); //document ready closure