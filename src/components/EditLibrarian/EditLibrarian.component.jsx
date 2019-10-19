import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import librarianActions from '../../redux/librarian/librarian.actions';

const EditLibrarian = (props) => {
  const { librarian, editLibrarian } = props;
  const [id] = useState(librarian.id);
  const [fullName, setFullName] = useState(librarian.fullName)

  const handleChange = event => {
    const { value } = event.target;
    setFullName(value);
  }

  const handleSubmit = event => {
    event.preventDefault();

    editLibrarian({id, fullName})

    props.history.push('/librarians');
  }

  return (
    <div>
      Edit Librarian - {librarian.fullName}
      <hr />
      <form onSubmit={handleSubmit}>
        <label>Librarian Name:</label>{' '}
        <input type='text' id='fullName' name='fullName' value={fullName} onChange={handleChange} />{' '}
        <input type='submit' value='Update Librarian' />
      </form>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    librarian: state.librarians.list.find(librarian => {
      return librarian.id === Number(ownProps.match.params.id)
    })
  }
}

const mapDispatchToProps = {
  ...librarianActions
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(EditLibrarian));