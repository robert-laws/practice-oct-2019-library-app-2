import React, { useState, useEffect } from 'react';

import { Grid, Form } from 'semantic-ui-react';

import courses from '../../data/courses';

const LessonMeta = () => {
  const [state, setState] = useState({ term: '', courseNumber: '', courseTitle: '', faculty: '' })

  const handleChange = (event, { name, value}) => {
    setState({
      ...state,
      [name]: value
    })
  }

  const getCourseList = (term) => {
    const courseList = courses.map(course => {
      if(course.term === term) {
        return <option key={course.id} value={course.courseNumber}>{course.courseNumber}</option>
      } else {
        return null
      }
    })
    return courseList;
  }

  const { term, courseNumber, courseTitle, faculty } = state;

  return (
    <Grid columns={1}>
      <Grid.Column>
        <Form>
          <Form.Select label='Term' placeholder='Term' name='term' options={
            [
              { key: 'fall', text: 'Fall 2019', value: 'Fall 2019' },
              { key: 'spring', text: 'Spring 2020', value: 'Spring 2020' }
            ]
          } value={term} onChange={handleChange} />
          <Form.Field label='Course Code' name='courseNumber' id='courseNumber' control='select' value={courseNumber} onChange={handleChange}>
            {getCourseList(term)}
          </Form.Field>
        </Form>
      </Grid.Column>
    </Grid>
  )
}

export default LessonMeta;