import React, { useEffect } from "react"
import { capitalizeFirstLetter } from "../../utils/helpers"
import "./index.scss"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Homepage from "../../pages/Homepage";


function Navmenu(props) {
  const {
    pages = [],
    setCurrentPage,
    currentPage,
  } = props

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentPage.name)
  }, [currentPage])

  function refreshPage() {
    window.location.reload(false)
  }

  return (
    <Navbar collapseOnSelect bg="light" expand="lg">
      <Container>
        <Navbar.Brand onClick={refreshPage}> Edgar Fernandez</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <ul className="navbar-nav m-auto ">
              {pages.map((Page) => (
                <Nav.Link className={` ${currentPage.name === Page.name && "active"}`} key={Page.name} eventKey="1">
                  <span onClick={() => setCurrentPage(Page)} className="ms-5">
                    {capitalizeFirstLetter(Page.name)}
                  </span>
                </Nav.Link>
              ))}
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navmenu