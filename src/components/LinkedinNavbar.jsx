import { Container, Form, FormControl, InputGroup, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { Basket3Fill, BriefcaseFill, BellFill, ChatDotsFill, Grid3x3GapFill, HouseFill, PeopleFill, Search } from "react-bootstrap-icons";

const LinkedinNavbar = () => (

    <Container fluid style={{ color: "#FFFFFF"}}>

        <Navbar bg="light" expand="lg">
            <Container>

                <Navbar.Brand href="#">
                    <img src="/LI-In-Bug.png" style={{width: "3rem"}} alt="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
               
                <Form className="mr-auto">
                    <InputGroup>
                        <InputGroup.Text style={{ backgroundColor: "#EEF3F8"}}>
                            <Search style={{color: "#61605F"}} size={16} />
                        </InputGroup.Text>
                        <FormControl id="inlineFormInputGroup" 
                            placeholder="Search" 
                            style={{backgroundColor: "#EEF3F8" }}/>
                    </InputGroup>
                </Form> 
           
                <Nav className="d-flex">  
                   
                    <Nav.Link href="#home" className="mx-2 pt-3 pb-0">
                        <HouseFill style={{ color: "#61605F",  }} size={30} />
                        <p className="pt-2" style={{ fontSize:"12px", color: "#61605F", textAlign: "center" }}>Home</p>
                    </Nav.Link>
                    
                    <Nav.Link href="#link" className="pt-3 pb-0 ">
                        <PeopleFill style={{ color: "#61605F"}} size={30} />
                        <p className="pt-2" style={{ fontSize:"12px", color: "#61605F", textAlign: "center" }}>My Network</p>
                        </Nav.Link>
                       
                    <Nav.Link href="#link" className="mx-2 pt-3 pb-0">
                        <BriefcaseFill style={{ color: "#61605F" }} size={30} />
                        <p className="pt-2" style={{ fontSize:"12px", color: "#61605F", textAlign: "center" }}>
                        Jobs</p></Nav.Link>
                    <Nav.Link href="#link" className="pt-3 pb-0 ">
                        <ChatDotsFill style={{ color: "#61605F" }} size={30} />
                        <p className="pt-2" style={{ fontSize:"12px", color: "#61605F", textAlign: "center" }}>
                        Messaging</p></Nav.Link>
                    <Nav.Link href="#link" className="pt-3 pb-0 mx-2">
                        <BellFill style={{ color: "#61605F" }} size={30} />
                        <p className="pt-2" style={{ fontSize:"12px", color: "#61605F", textAlign: "center" }}>
                        Notifications</p>
                    </Nav.Link>
                  

                    <NavDropdown title="Me" id="basic-nav-dropdown" className="pt-3 pb-0 mx-2">
                    <NavDropdown.Item href="#action/3.1">Account</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Manage</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Sign Out</NavDropdown.Item>
                    </NavDropdown>    

                    <Nav.Link href="#link" style={{ borderLeft: "solid 0.1px #61605F"}} className="pt-3 pb-0 mx-2">
                        <Grid3x3GapFill style={{ color: "#61605F" }} size={30} />
                        <p className="pt-2" style={{ fontSize:"12px", color: "#61605F", textAlign: "center" }}>
                        Work</p>
                    </Nav.Link>

                    <Nav.Link href="#link" className="pt-3 pb-0">
                        <Basket3Fill style={{ color: "#61605F" }} size={30} />
                        <p className="pt-2"
                        style={{ fontSize:"12px", color: "#61605F", textAlign: "center" }}>
                        Post a Job</p>
                    </Nav.Link>

                </Nav>

        </Navbar.Collapse>
        </Container>
        </Navbar>
    </Container>
)

export default LinkedinNavbar;
