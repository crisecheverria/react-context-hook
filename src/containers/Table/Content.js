import React, { useContext } from 'react';
import UsersContext from '../../context';

function Content({ user }) {
  const { deleteUser } = useContext(UsersContext);
  const { id, name, username, phone, address } = user;

  function onDeleteClick() {
    return deleteUser(id);
  }

  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{username}</td>
      <td>{phone}</td>
      <td>{address.city}</td>
      <td>
        <button className="button is-danger" onClick={onDeleteClick}>
          X
        </button>
      </td>
    </tr>
  );
}

export default Content;
