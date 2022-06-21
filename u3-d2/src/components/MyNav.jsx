import { Component } from "react"
import {Nav, Navbar, Form, FormControl, Button} from "react-bootstrap"

class MyNav extends Component{
    render(){
        return(
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Strive Books</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="mr-auto">
                        <Nav.Link href="#">Home</Nav.Link>
                        <Nav.Link href="#">About</Nav.Link>
                        <Nav.Link href="#">Browse</Nav.Link>
                  </Nav>
                  <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-success">Search</Button>
                  </Form>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}
export default MyNav
