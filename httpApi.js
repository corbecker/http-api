// Using http://jsonplaceholder.typicode.com to test 
function httpAPI() {
  this.http = new XMLHttpRequest();
}

// GET requests
httpAPI.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);
  this.http.send();

  this.http.onload = function() {
    if(this.http.status === 200){
      callback(null, this.http.responseText);
    }else{
      callback('Error: ' + this.http.status);
    }
  }.bind(this);
}

// POST requests
httpAPI.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);
  this.http.setRequestHeader('Content-type', 'application/json');
  this.http.onload = function(){
    callback(null, this.http.responseText);
  }.bind(this);


  this.http.send(JSON.stringify(data));
}

// PUT requests


// DELETE requests