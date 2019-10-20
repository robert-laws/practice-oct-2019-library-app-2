import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';

import { Container, Divider, Grid, Header, Menu } from 'semantic-ui-react';

import LessonForm from './components/LessonForm/LessonForm.component';
import LessonDetails from './components/LessonDetails/LessonDetails.component';
import Librarians from './components/Librarians/Librarians.component';
import EditLibrarian from './components/EditLibrarian/EditLibrarian.component';
import LessonMeta from './components/LessonMeta/LessonMeta.component';

import './App.scss';

class App extends Component {
  render() {
    return (
      <Container style={{ marginTop: '3em' }}>
        <Header as='h1'>
          Library App Home Page
        </Header>
        <Grid columns={12}>
          <Grid.Column>
            <Menu text>
              <Menu.Item>
                <Link to='/'>Home</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/librarians'>Librarians</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/lesson'>Lesson Details</Link>
              </Menu.Item>
              <Menu.Item>
                <Link to='/create-lesson'>Create a New Lesson</Link>
              </Menu.Item>
            </Menu>
          </Grid.Column>
        </Grid>

        <Divider />        
        
        <Switch>
          <Route exact path='/' component={LessonForm} />
          <Route exact path='/lesson' component={LessonDetails} />
          <Route exact path='/librarians' component={Librarians} />
          <Route path='/librarians/:id' component={EditLibrarian} />
          <Route path='/create-lesson' component={LessonMeta} />
        </Switch>
      </Container>
    );
  }
}

export default App;
