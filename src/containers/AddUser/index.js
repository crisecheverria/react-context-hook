import React, { useState, useContext } from 'react';
import uuid from 'uuid';
import UsersContext from '../../context';
import InputForm from '../../components/InputForm';

const initialState = {
  id: '',
  name: '',
  username: '',
  phone: '',
  city: ''
};

function AddUser() {
  const [showModal, setShowModal] = useState(false);
  const [values, setValues] = useState(initialState);
  const { addUser } = useContext(UsersContext);

  function handleModal() {
    return setShowModal(!showModal);
  }

  function onChange({ target: { name, value } }) {
    return setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(e) {
    e.preventDefault();

    const newUser = {
      id: uuid(),
      name: values.name,
      username: values.username,
      phone: values.phone,
      address: { city: values.city }
    };

    addUser(newUser);
    setValues(initialState);
  }

  const { name, username, phone, city } = values;

  return (
    <>
      <button className="button is-primary" onClick={handleModal}>
        Add user
      </button>
      <div className={`modal ${showModal ? 'is-active' : ''}`}>
        <div className="modal-background" />
        <div className="modal-card">
          <header className="modal-card-head">
            <p className="modal-card-title">Add user</p>
            <button
              className="delete"
              aria-label="close"
              onClick={handleModal}
            />
          </header>
          <section className="modal-card-body">
            <form onSubmit={onSubmit}>
              <InputForm
                label="Name"
                type="text"
                name="name"
                value={name}
                onChange={onChange}
              />

              <InputForm
                label="Username"
                type="text"
                name="username"
                value={username}
                onChange={onChange}
              />

              <InputForm
                label="Phone"
                type="text"
                name="phone"
                value={phone}
                onChange={onChange}
              />

              <InputForm
                label="City"
                type="text"
                name="city"
                value={city}
                onChange={onChange}
              />

              <button
                className="button is-primary"
                type="submit"
                onClick={handleModal}
              >
                Submit
              </button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
}

export default AddUser;
