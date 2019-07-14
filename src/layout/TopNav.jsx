import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

const TopNav = ({ location }) => {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='#home'>React News & Bookmark</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link activeClassName='active' exact as={NavLink} to='/'>
              Top News
            </Nav.Link>
            <Nav.Link activeClassName='active' as={NavLink} to='/search'>
              Search
            </Nav.Link>
            <Nav.Link activeClassName='active' as={NavLink} to='/bookmarks'>
              Bookmarks
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default withRouter(TopNav);
