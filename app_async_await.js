const http = new HttpAPI();

// GET posts
http.get('http://jsonplaceholder.typicode.com/posts')
  .then(posts => console.log(posts))
  .catch(err => console.log(err))

const data = {
  title: "Custom title",
  body: "This is a custom post."
};

// Create post
http.post('http://jsonplaceholder.typicode.com/posts', data)
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Update post
http.put('http://jsonplaceholder.typicode.com/posts/1', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Delete post
http.delete('http://jsonplaceholder.typicode.com/posts/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));
