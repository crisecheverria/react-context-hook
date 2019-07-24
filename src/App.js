import React from 'react';
import './App.css';
import Table from './components/Table';
import UsersProvider from './components/UserProvider';

import 'bulma/css/bulma.min.css';

function App() {
  return (
    <UsersProvider>
      <div className="container">
        <Table />
      </div>
    </UsersProvider>
  );
}

export default App;
