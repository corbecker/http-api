const http = new HttpAPI();

// GET posts
const posts = http.get('http://jsonplaceholder.typicode.com/posts')
  .then(data => console.log(data))
  .catch(error => console.log(error))

const data = {
  title: "Custom title changed",
  body: "This is a custom post that has been changed."
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
