import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

class Header extends Component {
  render() {
    const {userName} = this.props;
    return (
      <header>
        <Link to="/search"><h1>TrybeBooks</h1></Link>
        <div className="header-right">
          <span>{userName}</span>
          <Link to="/my-books">0 books read</Link>
        </div>
      </header>
    )
  }
}

const mapStateToProps = (globalState) => ({
  userName: globalState.user.name,
})

Header.propTypes = {
  userName: PropTypes.string.isRequired,
}

export default connect(mapStateToProps, null)(Header);