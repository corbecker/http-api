const http = new httpAPI();

// get posts
http.get('http://jsonplaceholder.typicode.com/posts1', function(error, posts){
  if(error){
    console.log(error);
  }else{
    console.log(posts);
  }
})