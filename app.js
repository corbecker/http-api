const http = new httpAPI();

// get posts
// http.get('http://jsonplaceholder.typicode.com/posts', function(error, posts){
//   if(error){
//     console.log(error);
//   }else{
//     console.log(posts);
//   }
// });
const data = {
  title: "Custom title changed",
  body: "This is a custom post."
};

// create post
// http.post('http://jsonplaceholder.typicode.com/posts', data, function(error, post){
//   if(error){
//     console.log(error);
//   }else{
//     console.log(post);
//   }
// });

// update post
http.put('http://jsonplaceholder.typicode.com/posts/1', data, function(error, post) {
  if(error){
    console.log(error);
  }else{
    console.log(post);
  }
});