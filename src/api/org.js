class OrgApi {
    
    async loginAdmin( row) {
      let response = await fetch("http://localhost:4004/org-login", {
        method: "POST",
        body: JSON.stringify(row),
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
      });
      let data = await response.json();
      return data;
    }
    async fetchStudent(token) {   
      const payload = {
        method: "GET",
        headers: new Headers({
          "X-Api-Key": token,
        }),
      } 
       let response = await fetch("http://localhost:4004/fetch-student",payload);
       let data = await response.json();
       return data
    }
    


  }
  
  export default new OrgApi();