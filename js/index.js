class User {
  constructor(id, first_name, last_name, email, avatar, parentSelector) {
      this.id = id;
      this.first_name = first_name;
      this.last_name = last_name;
      this.email = email;
      this.avatar = avatar;
      this.parent =  document.querySelector(parentSelector);
  }

  

  render() {
      const element = document.createElement('tr');

     

      element.innerHTML = `
      <th scope="row" class="align-middle">${this.id}</th>
      <td class="align-middle">${this.first_name}</td>
      <td class="align-middle">${this.last_name}</td>
      <td class="align-middle">${this.email}</td>
      <td class="align-middle"><img src=${this.avatar} alt="avatar"></td>
      `;
      this.parent.append(element);
  }
}

async function getResource(url) {
  let res = await fetch(url);

  if (!res.ok) {
      throw new Error(`Could not fetch ${url}, status: ${res.status}`);
  }

  return await res.json();
}

getResource('users.json')
  .then(data => {
      data.forEach(({id, first_name, last_name, email, avatar}) => {
          new User(id, first_name, last_name, email, avatar, "tbody").render();
      });
  });

