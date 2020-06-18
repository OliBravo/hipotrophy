import React from 'react';

import { Nav, Navbar, Form, FormControl, Button, InputGroup } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Menu.css';

import search from '../../img/search.svg';
import login from '../../img/login.svg';
import contact from '../../img/contact.svg';

function Menu() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle className="ml-auto" aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#" className="menu-nav-item">Hipotrofia</Nav.Link>
                    <Nav.Link href="#" className="menu-nav-item">Pomoc</Nav.Link>
                    <Nav.Link href="#" className="menu-nav-item">Historia dzieci</Nav.Link>
                    <Nav.Link href="#" className="menu-nav-item">Współpraca</Nav.Link>
                    <Nav.Link href="#" className="menu-nav-item"><img className="mr-2 menu-mobile-only" src={contact} width='18' height='18'></img>Kontakt</Nav.Link>
                </Nav>
                <Form inline>
                    <InputGroup className="menu-search">
                        <FormControl className="menu-search-input" placeholder="szukana fraza" type="text" />
                        <InputGroup.Append>
                            <Button className="mr-2 menu-search-button" variant="light">
                                <img src={search} width='18' height='18'></img>
                            </Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                <Nav>
                    <Nav.Link href="#" className="menu-nav-item">
                        <img src={login} width='16' />
                        <span className="ml-2 menu-mobile-only">Załoguj się</span>
                    </Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu;