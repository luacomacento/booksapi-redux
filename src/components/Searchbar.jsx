import React, { Component } from 'react';

export class Searchbar extends Component {
  constructor() {
    super();
    this.state = {
      query: ''
    }
  }

  handleChange = ({target}) => {
    this.setState({
      query: target.value
    })
  }

  handleSearch = (event) => {
    // const { fetchBooks } = this.props;
    event.preventDefault();
    // fetchBooks();
  }

  render() {
    return (
      <form>
        <input type="text" placeholder="Search..." onChange={this.handleChange}/>
        <button type="submit" onClick={this.handleSearch}>Search</button>
      </form>
    )
  }
}

// const mapDispatchToProps = (dispatch) => ({
//   fetchBooks: () => dispatch(fetchBooks()),
// })

// Searchbar.propTypes = {
//   fetchBooks: PropTypes.func.isRequired,
// }

// export default connect(null, mapDispatchToProps)(Searchbar);

export default Searchbar;