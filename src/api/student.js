class StudentApi {

    async Addstudent(token,raw) {  
      let response = await fetch("http://localhost:4004/add-student", {
        method: "POST",
        body: JSON.stringify(raw),
        headers: new Headers({
          "X-Api-Key": token,
          'Content-Type': 'application/json'
        }),
      });
      let data = await response.json();
      return data;
    }

    async loginstudent(raw) {
      let response = await fetch("http://localhost:4004/student-login", {
        method: "POST",
        body: JSON.stringify(raw),
        headers: new Headers({
          'Content-Type': 'application/json'
        }),
      });
      let data = await response.json();
      return data;
    }
  }
  
  export default new StudentApi();