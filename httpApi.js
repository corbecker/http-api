// Using http://jsonplaceholder.typicode.com to test 
class HttpAPI {
  get(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    })
  }

  post(url, data){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'applcation/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    })
  }

  put(url, data){
    return new Promise ((resolve, reject) => {
      fetch(url, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    });
  }

  delete(url){
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'DELETE'
      })
      .then(res => res.json())
      .then(data => resolve(data))
      .catch(err => reject(err));
    })
  }
}