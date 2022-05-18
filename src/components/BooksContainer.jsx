import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class BooksContainer extends Component {
  render() {
    const { booksList } = this.props;
    return (
      <div>
        {booksList.map((book) => (
          <div key={book.id}>
            <img src={book.formats["image/jpeg"]} />
            <Link to={`/books/${book.id}`}>{book.title}</Link>
            <p>{book.authors[0].name}</p>
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  booksList: state.books.list
})

BooksContainer.propTypes = {
  booksList: PropTypes.array.isRequired,
}

export default connect(mapStateToProps)(BooksContainer);