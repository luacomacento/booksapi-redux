import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import BooksContainer from '../components/BooksContainer'
import Header from '../components/Header'
import Searchbar from '../components/Searchbar'
import { fetchBooks } from '../redux/actions'
import '../styles/Search.css'

export class Search extends Component {
  componentDidMount() {
    const { fetchBooks } = this.props;
    fetchBooks();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <Searchbar />
          <BooksContainer />
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchBooks: () => dispatch(fetchBooks()),
})

Search.propTypes = {
  fetchBooks: PropTypes.func.isRequired,
}

export default connect(null, mapDispatchToProps)(Search)