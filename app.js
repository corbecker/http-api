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
  "title": "Custom title",
  "body": "This is a custom post."
};

http.post('http://jsonplaceholder.typicode.com/posts', data, function(error, post){
  if(error){
    console.log(error);
  }else{
    console.log(post);
  }
});