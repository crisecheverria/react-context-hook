import React, { useState } from 'react';

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

  function handleModal() {
    return setShowModal(!showModal);
  }

  function onChange({ target: { name, value } }) {
    return setValues({
      ...values,
      [name]: value
    });
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
            <form>
              <div className="field">
                <label className="label">Name</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="name"
                    value={name}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Username</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="username"
                    value={username}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">Phone</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="phone"
                    value={phone}
                    onChange={onChange}
                  />
                </div>
              </div>

              <div className="field">
                <label className="label">City</label>
                <div className="control">
                  <input
                    className="input"
                    type="text"
                    name="city"
                    value={city}
                    onChange={onChange}
                  />
                </div>
              </div>

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
