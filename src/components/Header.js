import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const Header = () => {
	return ( 
		<Navbar bg="light" expand="lg">
			<Navbar.Brand href="#home">NASA</Navbar.Brand>
			<Navbar.Toggle aria-controls="basic-navbar-nav" />
			<Navbar.Collapse id="basic-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="/">Home</Nav.Link>
					<Nav.Link href="/pic-of-day">Pics of Day</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	 );
}
 
export default Header;