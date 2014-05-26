$(document).ready(function(){

	var posts = [];                                  // instantiates empty array
  var count = 1000;                                // generic count (for id below)

  var addPost = function(newPost){
    var postString = ["<div id='", newPost.id, "' class='post'>",
                      "<div class='post-item'>", newPost.title, "</div>",
                      "<div class='post-item'>", newPost.body, "</div>",
          
                      "<div class='post-actions'>",
                            
                      "<span class='delete btn btn-action'>Delete</span>",
                      "</div>",
                      "</div>"].join("");
 
    console.log(postString);
 
    $("#post_show").append(postString);
  
  }; //addPost closure


  // Now we need to watch for a submit 
  //  event on the form
  

  $.get('/posts.json').done(function(data) {
    posts = data
    $.each(posts, function(index, item){
      addPost(item);
    });
  });



}); //document ready closure