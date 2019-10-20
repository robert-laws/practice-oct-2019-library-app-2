import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buildLesson } from '../../redux/lessonPlan/lessonPlan.actions';

import { Grid, Form } from 'semantic-ui-react';

import courses from '../../data/courses';

class LessonForm extends Component {

  render() {
    const { onAddClassContent, name, code, term } = this.props;

    return (
      <Grid columns={1}>
        <Grid.Column>
          <Form>
            <Form.Select label='Term' placeholder='Term' name='term' options={
              [
                { key: 'fall', text: 'Fall 2019', value: 'Fall 2019' },
                { key: 'spring', text: 'Spring 2020', value: 'Spring 2020' }
              ]
            } value={term} onChange={onAddClassContent} />
            <Form.Field>
              <Form.Input label='Course Name' placeholder='Course Name' name='name' id='name' value={name} onChange={onAddClassContent} />
            </Form.Field>
            <Form.Select label='Course Code' placeholder='Course Code' name='code' id='code' options={         
              courses.map(course => {
                return { key: course.id, text: course.courseNumber, value: course.courseNumber }
              })
            } value={code} onChange={onAddClassContent} />
          </Form>
        </Grid.Column>
      </Grid>
    )
  }
}

const mapStateToProps = state => {
  return {
    term: state.lesson.term,
    name: state.lesson.name,
    code: state.lesson.code
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onAddClassContent: (event, { name, value}) => dispatch(buildLesson(name, value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonForm);