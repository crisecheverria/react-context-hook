import React from 'react';
import './App.css';
import Table from './containers/Table';
import UsersProvider from './containers/UserProvider';
import AddUser from './containers/AddUser';

import 'bulma/css/bulma.min.css';

function App() {
  return (
    <UsersProvider>
      <div className="container">
        <Table />
        <AddUser />
      </div>
    </UsersProvider>
  );
}

export default App;
