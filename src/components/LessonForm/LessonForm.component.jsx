import React, { Component } from 'react';
import { connect } from 'react-redux';
import { buildLesson } from '../../redux/lessonPlan/lessonPlan.actions';

class LessonForm extends Component {

  render() {
    const { onAddClassContent, name, code, term } = this.props;

    return (
      <div>
        <p>
          Term: 
          <select name='term' value={term} onChange={onAddClassContent}>
            <option value=''>Select a Term</option>
            <option value='Fall 2019'>Fall 2019</option>
            <option value='Spring 2020'>Spring 2020</option>
          </select>
        </p>
        <p>
          Class Name: <input type='text' name='name' id='name' value={name} onChange={onAddClassContent} />
        </p>
        <p>
          Class Code: <input type='text' name='code' id='code' value={code} onChange={onAddClassContent} />
        </p>
      </div>
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
    onAddClassContent: event => dispatch(buildLesson(event.target.name, event.target.value))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LessonForm);