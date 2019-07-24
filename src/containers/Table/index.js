import React, { useContext } from 'react';
import UsersContext from '../../context';
import TableHeader from '../../components/Table/Header';
import TableContent from '../../components/Table/Content';

function Table() {
  const { users } = useContext(UsersContext);

  return (
    <table className="table is-fullwidth">
      <TableHeader />
      {users.map(user => (
        <TableContent key={user.id} user={user} />
      ))}
    </table>
  );
}

export default Table;
