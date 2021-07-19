import { Col, Button } from "react-bootstrap"
import { useState } from "react"


const ProfileMain = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <Col xs={7} md={7} lg={7}>
            <div className="profile-container">
                <div className="profile-background">

                </div>
                <div className="intro">
                    <div className="circle-logo"><h1 className="text-center">R</h1></div>
                    <div className="left-50">
                        <h2>Raissa Kisseljova</h2>
                        <p>
                            Attended Strive School
                        </p>
                        <span>City of Bristol, England, United Kingdom.</span>
                        <span className="contact-info">Contact info</span><br></br>
                        <button className="btn open">Open to</button>
                        <Button variant="outline-secondary add-section">Add section</Button>
                        <Button variant="outline-secondary more">More</Button>
                    </div>
                    <div className="right-50">
                        <img src="https://image.flaticon.com/icons/png/512/5020/5020972.png" alt="" />
                        <h4>Whatever information here</h4>
                    </div>
                </div>
            </div>


            {/* Section 2 */}

            <div className="profile-strength">

                <p>Profile Strength: <span>Intermediate</span></p>

                <div className="rate">
                    <div className="one">

                    </div>
                    <div className="two">

                    </div>
                    <div className="three">

                    </div>
                    <div className="four">
                        <div>
                            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ3Ny44NjcgNDc3Ljg2NyIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMjM4LjkzMywwQzEwNi45NzQsMCwwLDEwNi45NzQsMCwyMzguOTMzczEwNi45NzQsMjM4LjkzMywyMzguOTMzLDIzOC45MzNzMjM4LjkzMy0xMDYuOTc0LDIzOC45MzMtMjM4LjkzMyAgICBDNDc3LjcyNiwxMDcuMDMzLDM3MC44MzQsMC4xNDEsMjM4LjkzMywweiBNMjM4LjkzMyw0NDMuNzMzYy0xMTMuMTA4LDAtMjA0LjgtOTEuNjkyLTIwNC44LTIwNC44czkxLjY5Mi0yMDQuOCwyMDQuOC0yMDQuOCAgICBzMjA0LjgsOTEuNjkyLDIwNC44LDIwNC44QzQ0My42MTEsMzUxLjk5MSwzNTEuOTkxLDQ0My42MTEsMjM4LjkzMyw0NDMuNzMzeiIgZmlsbD0iIzZkYzc2MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNMzcwLjA0NiwxNDEuNTM0Yy02LjYxNC02LjM4OC0xNy4wOTktNi4zODgtMjMuNzEyLDB2MEwxODcuNzMzLDMwMC4xMzRsLTU2LjIwMS01Ni4yMDEgICAgYy02LjU0OC02Ljc4LTE3LjM1My02Ljk2Ny0yNC4xMzItMC40MTljLTYuNzgsNi41NDgtNi45NjcsMTcuMzUzLTAuNDE5LDI0LjEzMmMwLjEzNywwLjE0MiwwLjI3NywwLjI4MiwwLjQxOSwwLjQxOSAgICBsNjguMjY3LDY4LjI2N2M2LjY2NCw2LjY2MywxNy40NjgsNi42NjMsMjQuMTMyLDBsMTcwLjY2Ny0xNzAuNjY3QzM3Ny4wMTQsMTU4Ljg4NiwzNzYuODI2LDE0OC4wODIsMzcwLjA0NiwxNDEuNTM0eiIgZmlsbD0iIzZkYzc2MCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4=" />
                        </div>
                    </div>
                    <div className="five">

                    </div>
                    <div className="six">

                    </div>
                    <div className="seven">
                        <button className="expand">⮟</button>
                    </div>

                </div>
                <div className="expandable-area d-none">


                </div>


            </div>



        </Col >


    )

    const expandOrNot = () => {

    }
}

export default ProfileMain