import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { changeTheme } from '../actions/news';

const TopNav = ({ news, changeTheme }) => {
  return (
    <Navbar collapseOnSelect expand='lg' bg={news.theme} variant={news.theme}>
      <Container>
        <Navbar.Brand href='/'>React News Search & Bookmark</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link activeClassName='active' exact as={NavLink} to='/'>
              Top News
            </Nav.Link>
            <Nav.Link activeClassName='active' as={NavLink} to='/bookmarks'>
              Bookmarks
            </Nav.Link>
            <Nav.Link>
              <div
                onClick={() =>
                  changeTheme(news.theme === 'dark' ? 'light' : 'dark')
                }
                className={`circle-${news.theme === 'dark' ? 'light' : 'dark'}`}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

const mapStateToProps = state => ({
  news: state.news
});

export default connect(
  mapStateToProps,
  { changeTheme }
)(TopNav);
