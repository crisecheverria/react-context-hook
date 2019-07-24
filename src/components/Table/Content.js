import React from 'react';

function Content({ user }) {
  const { id, name, username, phone, address } = user;
  return (
    <tbody>
      <tr>
        <td>{id}</td>
        <td>{name}</td>
        <td>{username}</td>
        <td>{phone}</td>
        <td>{address.city}</td>
        <td>View Profile</td>
        <td>X</td>
      </tr>
    </tbody>
  );
}

export default Content;
