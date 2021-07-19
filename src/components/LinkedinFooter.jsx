import { Col, Container, Dropdown, Row } from "react-bootstrap";
import "./LinkedinFooter.css";

const LinkedinFooter = () => (
    <Container fluid style={{background: "#F3F2EF", paddingBottom: "2rem", paddingTop: "1rem"}}>
      <Container>
        <Row className="py-3"><Col><a href="#"><img src="/LI-Logo.png" style={{width: "10rem"}} alt="" /></a></Col></Row>
       
        <Row> 
            <Col className="mr-auto gx-0" style={{fontSize: "10px"}}>  
                
               
                <Row>
                    <Col><a href="#" style={{color: "#61605F", textDecorationLine: "none"}}><strong>About</strong></a>
                    </Col>
              
              
                    <Col>
                    <a href="#" style={{color: "#61605F", textDecorationLine: "none"}}><strong>Accessibility</strong></a>
                    </Col>
                
               
                    <Col>
                    <a href="#" style={{color: "#61605F", textDecorationLine: "none"}}><strong>Talent Solutions</strong></a>
                    </Col>                   
                </Row>
               
              

                <Row className="py-3">
                    <Col><a href="#" style={{color: "#61605F", textDecorationLine: "none"}}><strong>Community Guidelines</strong>
                    </a></Col>
              
                    <Col><a href="#" style={{color: "#61605F", textDecorationLine: "none"}}><strong>Careers</strong>
                    </a></Col>
              
                    <Col><a href="#" style={{color: "#61605F", textDecorationLine: "none"}}><strong>Marketing Solutions</strong>
                    </a></Col>
                </Row>

                <Row>
                    <Col><a href="#" style={{color: "#61605F", textDecorationLine: "none"}}>                        

                        <Dropdown >
                            <Dropdown.Toggle variant="light"
                                            id="dropdown-basic"
                                            style={{fontSize: "10px", 
                                            color: "#61605F",
                                            backgroundColor: "#F3F2EF",
                                            padding: "0px",
                                            margin: "0px",
                                            border: "none"
                                        }}
                                            >
                                                <strong>Privacy & Terms</strong>
                           
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                <Dropdown.Item href="#/action-1">Privacy Policy</Dropdown.Item>
                                <Dropdown.Item href="#/action-2">User Agreement</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Cookie Policy</Dropdown.Item>
                                <Dropdown.Item href="#/action-3">Copyright Policy</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>                       
                       
                    </a></Col> 
                       
                    <Col><a href="#" style={{color: "#61605F", textDecorationLine: "none"}}><strong>Ad Choices</strong>
                    </a></Col>
               
                    <Col><a href="#" style={{color: "#61605F", textDecorationLine: "none"}}><strong>Advertising</strong>
                    </a></Col>
                </Row>

                <Row className="py-3">
                <Col><a href="#" style={{color: "#61605F", textDecorationLine: "none"}}><strong>Sales Solutions</strong>
                </a></Col>
               
                <Col><a href="#" style={{color: "#61605F", textDecorationLine: "none"}}><strong>Mobile</strong>
                </a></Col>
                
                <Col><a href="#" style={{color: "#61605F", textDecorationLine: "none"}}><strong>Small Business</strong>
                </a></Col>
                </Row>

                <Row>
                <Col><a href="#" style={{color: "#61605F", textDecorationLine: "none"}}><strong>Safety Center</strong></a></Col>
                </Row>

                <Row className="pt-3">
                    <Col><a href="#" 
                    style={{color: "#61605F", textDecorationLine: "none"}}
                    >LinkedIn Corporation © 2021</a></Col>
                </Row>

            </Col>

            <Col >
            <Row >
            <Col className="col-7 ">
                <img src="https://img.icons8.com/material-outlined/24/000000/help.png"
                      style={{color: "#61605F"}} size={20}
                      className="mr-2" />
                    <a href="#" style={{color: "#61605F", fontSize: "12px"}}>                      
                      <strong>Questions?</strong>
                    </a>
                    <p className="ml-4" style={{color: "#61605F", fontSize: "10px"}}>Visit our Help Center</p>
                  
                    <img src="https://img.icons8.com/metro/26/000000/settings.png" 
                      style={{color: "#61605F"}} size={20}
                      className="mr-2"/>
                    <a href="#" style={{color: "#61605F", fontSize: "12px"}}>                      
                      <strong>Manage your account and privacy</strong>
                    </a>
                    <p className="ml-4" style={{color: "#61605F", fontSize: "10px"}}>Go to your Settings.</p>
               
                </Col>
             
           

            
                <Col className="col-5">
                <p style={{color: "#61605F", fontSize: "10px"}} className="mb-1">Select Language</p>
                <select class="custom-select" id="inputGroupSelect01" 
                style={{color: "#61605F", fontSize: "10px", width: "10rem", backgroundColor: "#F3F2EF"}}>
                    <option selected >English (English)</option>
                    <option value="1">English</option>
                    <option value="2">English</option>
                    <option value="3">English</option>
                </select>
                </Col>
              </Row>
            </Col>

        </Row> 
        </Container>
    </Container>
)

export default LinkedinFooter;