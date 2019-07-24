import React from 'react';

function Table() {
  return (
    <table className="table is-fullwidth">
      <thead>
        <tr>
          <th>id</th>
          <th>Name</th>
          <th>Username</th>
          <th>Phone</th>
          <th>City</th>
          <th>Profile</th>
          <th>Destroy</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Juan Pueblo</td>
          <td>juancho</td>
          <td>333-444-555</td>
          <td>Comayagua</td>
          <td>View Profile</td>
          <td>X</td>
        </tr>
      </tbody>
    </table>
  );
}

export default Table;
