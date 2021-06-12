class Request {

    constructor(){
      this.baseUrl = "http://localhost:8080/api"
  
    }
  
      get(url) {
        return fetch(url)
        .then((res) => res.json());
      }
  
      delete(url) {
        return fetch(this.baseUrl + url, {
          method: "DELETE",
          headers: {'Content-Type': 'application/json'}
        })
      }
  
      post(url, payload){
        return fetch(this.baseUrl + url, {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        })
      }
  
      patch(url, payload){
        return fetch(this.bodybaseUrl + url, {
          method: "PATCH",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(payload)
        })
      }
  
  }
  
  export default Request;