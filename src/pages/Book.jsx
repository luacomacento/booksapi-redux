import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import { fetchBookData } from '../redux/actions';

class Book extends Component {

  componentDidMount() {
    const { fetchBookData, match: { params: { id } } } = this.props;
    fetchBookData(id);
  }

  render() {
    const {currentBook} = this.props;
    return (
      <div>
        <Header />
          <div>
            <img src={currentBook?.formats?.["image/jpeg"]} />
            <h2>{currentBook?.title}</h2>
            <p>{currentBook?.authors?.[0]?.name}</p>
          </div>
      </div>
    )
  }
}

Book.propTypes = {
  fetchBookData: PropTypes.func.isRequired,
  match: PropTypes.object.isRequired,
  currentBook: PropTypes.object.isRequired,
}

const mapStateToProps = (state) => ({
  currentBook: state.books.currentBook,
})

const mapDispatchToProps = (dispatch) => ({
  fetchBookData: (id) => dispatch(fetchBookData(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Book)