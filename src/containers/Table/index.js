import React, { useContext } from 'react';
import UsersContext from '../../context';
import TableHeader from '../../components/Table/Header';
import TableContent from '../../containers/Table/Content';

function Table() {
  const { users } = useContext(UsersContext);

  return (
    <table className="table is-fullwidth">
      <TableHeader />
      <tbody>
        {users.map(user => (
          <TableContent key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
