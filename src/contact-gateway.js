import { inject } from "aurelia-framework";
import { Contact } from "./models";

let params = {
  method: "GET",
  mode: "no-cors",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
}

// @inject(HttpClient)
// export class ContactGateway {
//   constructor(httpClient) {
//     this.httpClient = httpClient.configure((config) => {
//       config.useStandardConfiguration().withBaseUrl(environment.contactsUrl);
//     });
//   }
//   getAll() {
//     return this.httpClient
//       .fetch("contacts")
//       .then((response) => response.json())

//       .then((dto) => dto.map(Contact.fromObject));
//   }
//   getById(id) {
//     return this.httpClient
//       .fetch(`contacts/${id}`)
//       .then((response) => response.json())
//       .then(Contact.fromObject);
//   }
// }

export class ContactGateway {
  getAll() {
    //const url = 'http://localhost:3000/contacts/';
    const url = 'http://127.0.0.1:8080/contacts';

    return fetch(url)
      .then((response) => response.json())
      //.then((data) => console.log(data))
      .then((data) => data.map(Contact.fromObject))

  }

  getById(id) {
    const url = `http://127.0.0.1:8080/contacts/${id}`;
    return fetch(url)
      .then((response) => response.json())
      .then(Contact.fromObject);
  }
}
