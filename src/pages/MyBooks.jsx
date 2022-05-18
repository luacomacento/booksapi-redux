import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';

class MyBooks extends Component {
  render() {
    const {currentBook} = this.props;
    return (
      <div>
        <Header />
        <div className="container">
          <h1>My Books</h1>
          <h3>Last viewed:</h3>
          <p>{currentBook.title}</p>
        </div>
      </div>
    )
  }
}

MyBooks.propTypes = {
  currentBook: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  currentBook: state.books.currentBook,
})

export default connect(mapStateToProps)(MyBooks);