import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import LessonForm from './components/LessonForm/LessonForm.component';
import LessonDetails from './components/LessonDetails/LessonDetails.component';
import Librarians from './components/Librarians/Librarians.component';
import EditLibrarian from './components/EditLibrarian/EditLibrarian.component';

import './App.scss';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>
          Library App Home Page
        </h1>
        <p>
          <Link to='/'>Home</Link>
        </p>
        <p>
          <Link to='/librarians'>Librarians</Link>
        </p>
        <p>
          <Link to='/lesson'>Lesson Details</Link>
        </p>
        <hr />
        <Switch>
          <Route exact path='/' component={LessonForm} />
          <Route exact path='/lesson' component={LessonDetails} />
          <Route exact path='/librarians' component={Librarians} />
          <Route path='/librarians/:id' component={EditLibrarian} />
        </Switch>
      </div>
    );
  }
}

export default App;
