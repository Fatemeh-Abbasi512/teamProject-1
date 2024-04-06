'use strict';

// DATA

const users = [
  {
    name: 'adel novdehi',
    email: 'adelnmo2003@gmail.com',
    userType: 'admin',
    joinedDate: '25 Apr 2018',
    state: 'verified',
  },
  {
    name: 'adel novdehi',
    email: 'adelnmo2003@gmail.com',
    userType: 'admin',
    joinedDate: '25 Apr 2018',
    state: 'active',
  },
  {
    name: 'adel novdehi',
    email: 'adelnmo2003@gmail.com',
    userType: 'admin',
    joinedDate: '25 Apr 2018',
    state: 'active',
  },
  {
    name: 'ali rasoli',
    email: 'adelnmo2003@gmail.com',
    userType: 'owner',
    joinedDate: '25 Apr 2018',
    state: 'disable',
  },
  {
    name: 'mahnaz afshar',
    email: 'mahnaz-afshar@gmail.com',
    userType: 'admin',
    joinedDate: '25 Apr 2018',
    state: 'verified',
  },
];

// ELEMENTS
const table = document.querySelector('.table__body');

// FUNCTION
const capitalize = function (str) {
  const result = str
    .toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
  return result;
};

table.innerHTML = '';

users.forEach(function (user) {
  const html = `<tr class="table__row">
    <td>${capitalize(user.name)}</td>
    <td>${user.email}</td>
    <td>${capitalize(user.userType)}</td>
    <td>${user.joinedDate}</td>
    <td class="table__state">
      <span class="table__state--${user.state} table__state-span"
        >${capitalize(user.state)}</span
      >
    </td>
  </tr>`;

  table.insertAdjacentHTML('beforeend', html);
});
