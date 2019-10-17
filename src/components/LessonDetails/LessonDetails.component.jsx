import React, { Component } from 'react';
import { connect } from 'react-redux';

class LessonDetails extends Component {
  render() {
    const { term, name, code } = this.props;

    return (
      <div>
        <p>
          {term}
        </p>
        <p>
          {code}: {name}
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

export default connect(mapStateToProps)(LessonDetails);