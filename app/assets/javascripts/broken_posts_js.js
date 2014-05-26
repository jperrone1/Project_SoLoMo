// // Waiting for the DOM to finish loading
// $(document).ready(function(){
 
//   var posts = [];                             // instantiates empty array
//   // var count = 1000;                        // generic count (for id below)

  
//   // var addLetterBoard = function() {
//   //   $("#letters").append('<div class="show-all btn btn-action">Show All')  //FINISH
//   //   for (var charCode = 65; charCode < 91;)
//   // }

//   var deletePost = function(event){         //defines var set to remove function ($this)
//     console.log("Delete", this);               // console.log
//     $(this).parents(".post").remove();      // removes $this delegation (.post?)
//   }; //deletePost
  
//   $("#posts").on("click", ".delete", deletePost); //#posts empty div id bottom of html
 
 
//   var addPost = function(newPost){
//     var postString = ["<div id='", newPost.id, "' class='post'>",
//                             "<div class='post-item'>", newPost.title, "</div>",
//                             "<div class='post-item'>", newPost.body, "</div>",
//                             "<div class='post-actions'>",
//                             "<span class='delete btn btn-action'>Delete</span>",
//                             "</div>",
//                           "</div>"].join("");
 
//     console.log(postString);
 
//     $("#posts").append(postString);
  
//   };
 
//   // Now we need to watch for a submit 
//   //  event on the form
//   $("#new_post").submit( function(event){
//     // Prevent the page from reloading
//     event.preventDefault();
 
//     //console.log(this);
 
//     var title = $("#post_title").val();
//     var body = $("#post_body").val();

 
//     console.log(title, body);
 
//     // Reset the form
//     this.reset();
 
 
//     // Keeping track of new posts
//     var newPost = { 
//                        // id: count,
//                        title: title,
//                        body: body };
//     // count += 1;
 

 
//     $.post('/posts.json', {title : newPost } )
//       .done(function(savedPost) {
//           posts.push(savedPost);    // this array reflects everything saved in database 
//           // posts.push(newPost);
//       });

//     // posts.push(newPost);
//     // rerenderPosts(); 
//     // Call a function to add our post to 
//     //  the page.
//     addPost(newPost);    
//   });


//   $.get('/posts.json').done(function(data) {
//     posts = data
//     $.each(posts, function(index, item){
//       addPost(item);
//     });
//   });


// });  // document ready
