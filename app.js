const http = new httpAPI();

// GET posts
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

// CREATE post
// http.post('http://jsonplaceholder.typicode.com/posts', data, function(error, post){
//   if(error){
//     console.log(error);
//   }else{
//     console.log(post);
//   }
// });

// UPDATE post
// http.put('http://jsonplaceholder.typicode.com/posts/1', data, function(error, post) {
//   if(error){
//     console.log(error);
//   }else{
//     console.log(post);
//   }
// });

// DELETE a post
http.delete('http://jsonplaceholder.typicode.com/posts/1', function(error, response){
  if(error){
    console.log(error);
  }else{
    console.log(response);
  }
})