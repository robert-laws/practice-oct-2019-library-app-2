import React, { useState } from 'react';
import { connect } from 'react-redux';
import librarianActions from '../../redux/librarian/librarian.actions';

const Librarians = (props) => {
  const { librarians, addLibrarian } = props;
  const [fullName, setFullName] = useState('');

  const handleChange = event => {
    const { value } = event.target;
    setFullName(value);
  }

  const handleSubmit = event => {
    event.preventDefault();
    const id = librarians.length + 1;
    addLibrarian({id, fullName})
    setFullName('')
  }

  return (
    <div>
      <h1>Librarians</h1>
      <hr />
      <ul>
        {librarians.map(librarian => {
          return <li key={librarian.id}>{librarian.fullName}</li>
        })}
      </ul>
      <hr />
      <div>
        <form onSubmit={handleSubmit}>
          <label>Librarian Name</label>:{' '}
          <input type='text' id='fullName' name='fullName' value={fullName} onChange={handleChange} />{' '}
          <input type='submit' value='Add Librarian' />
        </form>
      </div>
    </div>
  )
}

const mapDispatchToProps = {
  ...librarianActions
}

const mapStateToProps = state => {
  return {
    librarians: state.librarians.list
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Librarians);