$(document).ready(function(){ 

   var loadPosts = function() {
      $.ajax('/posts.json', {type: 'get'}).success(function(data){
        for (var i in data) {
            console.log("Hello Retreived!");

          $('.post_1').append('<li id=' + data[i]["id"] + '>' + data[i]["title"] + ' - ' + data[i]["body"] + ' ' + '<button class="delete" type="submit">' + 'Delete </button>' + '<button class="show" type="submit">' + 'Show </button>'+'</li>' );
        }
      });
    }

  //saves to database
  $('#new_post').on('submit', function(event){
    event.preventDefault();
    var form = $(this);
    var title = $('#post_title').val();
    var body = $('#post_body').val();
    this.reset();

    //post request 
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
          console.log("Hello SUCCESS ADDED HANDLER!");

        console.log(data);
        var span = $('.post_1');
        var post =  "<li>"+data.title+" - " + data.body + '<button class="delete" type="submit">' + 'Delete</button>' + '<button class="show" type="submit">' + 'Show </button>'+'</li>';
        span.append(post);
        // $('post').val('');
      }, //success
      error: function(){
        alert("Server no love you long time");
      } //error
    }); // AJAX CLOSURE
  }); // new post submit event closure

  console.log("Hello Loading!");
  console.log($('.delete'));

  //deletes item on click
  $('.post_1').on('click', '.delete', function(event) {     //button delete class
  event.preventDefault();
  var parent = $(this).parent();
  console.log(parent.attr('id'));

    $.ajax({
      type: 'get',
      url: 'posts/delete/' + parent.attr('id')
      // data: 'ajax=' + parent.attr('id') + '&delete=',
    // success: console.log("DELETED")
    });     //ajax delete    
    
    parent.fadeOut(500,function(){
    parent.remove();

    }); //parent.fadeout

  }); //entire delete handler


  // var deletePost = function(event){                //defines var set to remove function ($this)
  //   $(this).parent(".post_1").remove();             // removes $this delegation
  //   // $(this).parent("ul").remove(); 
  //   // $(this).remove(); 
  //   // PUT AJAX IN HERE
  // };
  
  // // $(".post_1").on("click", ".delete", deletePost);
  // $(".delete").on("click", ".delete", deletePost);

  // var showPost = function(event){                //defines var set to remove function ($this)
  //   var id = $(this).parents.id;             // removes $this delegation 
  //   $.ajax ( get showpagecontroller.json )
  // };

  //  USE HREF --->  wrap button in redirect


   //#contacts empty div id bottom of html
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


  // }); // new post submit event closure

  loadPosts();
}); //document ready closure