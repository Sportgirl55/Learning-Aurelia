import { Contact } from "./models";

export class Repos {
  contacts = [];
  repos = [];
  // getData() {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     //.then((data) => data.map(Contact.fromObject))
  //     .then((data) => this.contacts = data.map(Contact.fromObject))
  //     .then(() => console.log(this.contacts));
  // }
  // myPostData = {
  //   id: 101,
  // };


  getRepo() {
    const url = "https://api.github.com/orgs/aurelia/repos";
    return fetch(url)
    .then((response) => response.json())
    .then(response => this.repos = response)
  }

  postData(myPostData) {
    fetch("http://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify(myPostData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
  myUpdateData = {
    id: 1,
  };
  updateData(myUpdateData) {
    fetch("http://jsonplaceholder.typicode.com/posts/1", {
      method: "PUT",
      body: JSON.stringify(myUpdateData),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
  deleteData() {
    fetch("http://jsonplaceholder.typicode.com/posts/1", {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}
