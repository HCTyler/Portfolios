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
          <Nav className="me-auto">
            <ul className="navbar-nav ml-auto">
              {pages.map((Page) => (
                <Nav.Link className={` ${currentPage.name === Page.name && "active"}`} key={Page.name} eventKey="1">
                  <span onClick={() => setCurrentPage(Page)}>
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

    // <nav className="navbar navbar-expand-lg navbar-light fixed-top" id="mainNav">
    //   <div className="container">
    //     <a className="navbar-brand js-scroll-trigger">Edgar Fernandez</a>
    //     <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    //       <span className="navbar-toggler-icon"></span>
    //     </button>
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul className="navbar-nav ml-auto">
    //         {pages.map((Page) => (
    //           <li
    //             className={`nav-item nav-link js-scroll-trigger ${currentPage.name === Page.name && "active"
    //               }`}
    //             key={Page.name}
    //           >
    //             <span
    //               onClick={() => setCurrentPage(Page)}
    //             >
    //               {capitalizeFirstLetter(Page.name)}
    //             </span>
    //           </li>
    //         ))}
    //       </ul>
    //     </div>
    //   </div>
    // </nav>