import { Col, Button, Carousel } from "react-bootstrap"
import { useState } from "react"
import Experiences from "./Experiences"
import Dashboard from "./Dashboard"
import Activity from "./Activity"
import Education from './Education'


const ProfileMain = () => {
    const [toggle, setToggle] = useState(false)
    return (
        <Col xs={8} md={8} lg={8}>
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
                        <button className="expand" onClick={() => setToggle({ toggle: !toggle })}>⮟</button>
                    </div>

                </div>
                {
                    <div className={toggle ? 'd-block expandable-area' : 'd-none expandable-area'} >


                        <Carousel className="carousel">
                            <Carousel.Item>
                                <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTA4IDUwOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTA4IDUwODsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojRkZEMTVDOyIgY3g9IjI1My41NSIgY3k9IjIwMS43IiByPSIyMDEuNyIvPg0KPGc+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzQwNTk2QjsiIGQ9Ik05MC4xNSwzMTkuN0wyMC43NSw0NDBsODEtNC4zbDM2LjgsNzIuM2w2NC4yLTExMS4zQzE1Ni43NSwzODQuOCwxMTcuMjUsMzU3LjEsOTAuMTUsMzE5Ljd6Ii8+DQoJPHBhdGggc3R5bGU9ImZpbGw6IzQwNTk2QjsiIGQ9Ik00MTcuMzUsMzE5LjFjLTI2LjksMzcuNS02Ni40LDY1LjMtMTEyLjMsNzcuNGw2NC40LDExMS41bDM2LjgtNzIuM2w4MSw0LjNMNDE3LjM1LDMxOS4xeiIvPg0KPC9nPg0KPGNpcmNsZSBzdHlsZT0iZmlsbDojRjhCNjRDOyIgY3g9IjI1My41NSIgY3k9IjIwMS43IiByPSIxNDYuMiIvPg0KPHBhdGggc3R5bGU9ImZpbGw6I0ZGRkZGRjsiIGQ9Ik0zNTMuNzUsMTg1LjljNC41LTQuNCwyLTEyLjEtNC4yLTEzbC01Ny43LTguNGMtMi41LTAuNC00LjYtMS45LTUuNy00LjJsLTI1LjgtNTIuMw0KCWMtMi44LTUuNy0xMC45LTUuNy0xMy43LDBsLTI1LjcsNTIuM2MtMS4xLDIuMi0zLjMsMy44LTUuNyw0LjJsLTU3LjcsOC40Yy02LjIsMC45LTguNyw4LjYtNC4yLDEzbDQxLjcsNDAuNw0KCWMxLjgsMS44LDIuNiw0LjMsMi4yLDYuN2wtOS44LDU3LjRjLTEuMSw2LjIsNS41LDExLDExLjEsOGw1MS42LTI3LjFjMi4yLTEuMiw0LjktMS4yLDcuMSwwbDUxLjYsMjcuMWM1LjYsMi45LDEyLjEtMS44LDExLjEtOA0KCWwtOS45LTU3LjRjLTAuNC0yLjUsMC40LTUsMi4yLTYuN0wzNTMuNzUsMTg1Ljl6Ii8+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" />
                                <div className="advices">

                                    <p className="important">Add 5 skills to showcase what you are great at <br></br><span> Members with more than 5 skills are 27X more likely to be discovered
                                        in searchers by recruiters </span></p>

                                </div>

                            </Carousel.Item>
                            <Carousel.Item>
                                <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDU4IDU4IiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIGlkPSIwMjMtLS1TaWduLUZvcm0iIGZpbGw9Im5vbmUiPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTU4IDZ2NDhjMCAyLjIwOTEzOS0xLjc5MDg2MSA0LTQgNGgtNTBjLTIuMjA5MTM5IDAtNC0xLjc5MDg2MS00LTR2LTQ4eiIgZmlsbD0iI2VjZjBmMSIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTU4IDZ2NDhjMCAyLjIwOTEzOS0xLjc5MDg2MSA0LTQgNGgtNTBjLTIuMjA5MTM5IDAtNC0xLjc5MDg2MS00LTR2LTQ4eiIgZmlsbD0iI2IwZDNmMCIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTU4IDR2NGgtNTh2LTRjMC0yLjIwOTEzOSAxLjc5MDg2MS00IDQtNGg1MGMyLjIwOTEzOSAwIDQgMS43OTA4NjEgNCA0eiIgZmlsbD0iIzU2NTk1ZSIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTQuMDIgNWMtLjU1MjI4NDc1IDAtMS0uNDQ3NzE1MjUtMS0xcy40NDc3MTUyNS0xIDEtMSAxIC40NDc3MTUyNSAxIDEtLjQ0NzcxNTI1IDEtMSAxeiIgZmlsbD0iI2U2NGMzYyIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTguMDIgNWMtLjU1MjI4NDc1IDAtMS0uNDQ3NzE1MjUtMS0xcy40NDc3MTUyNS0xIDEtMSAxIC40NDc3MTUyNSAxIDEtLjQ0NzcxNTI1IDEtMSAxeiIgZmlsbD0iI2YwYzQxOSIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTEyLjAyIDVjLS41NTIyODQ3IDAtMS0uNDQ3NzE1MjUtMS0xcy40NDc3MTUzLTEgMS0xIDEgLjQ0NzcxNTI1IDEgMS0uNDQ3NzE1MyAxLTEgMXoiIGZpbGw9IiMyNGFlNWYiLz48cGF0aCBpZD0iU2hhcGUiIGQ9Im01MyA2Yy0uNTUyMjg0NyAwLTEtLjQ0NzcxNTI1LTEtMXYtMmMwLS41NTIyODQ3NS40NDc3MTUzLTEgMS0xczEgLjQ0NzcxNTI1IDEgMXYyYzAgLjU1MjI4NDc1LS40NDc3MTUzIDEtMSAxeiIgZmlsbD0iI2JkYzNjNyIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTUyIDRoMiIgZmlsbD0iI2JkYzNjNyIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTU0IDVoLTJjLS41NTIyODQ3IDAtMS0uNDQ3NzE1MjUtMS0xcy40NDc3MTUzLTEgMS0xaDJjLjU1MjI4NDcgMCAxIC40NDc3MTUyNSAxIDFzLS40NDc3MTUzIDEtMSAxeiIgZmlsbD0iI2JkYzNjNyIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTQ2IDRoMiIgZmlsbD0iI2JkYzNjNyIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTQ4IDVoLTJjLS41NTIyODQ3IDAtMS0uNDQ3NzE1MjUtMS0xcy40NDc3MTUzLTEgMS0xaDJjLjU1MjI4NDcgMCAxIC40NDc3MTUyNSAxIDFzLS40NDc3MTUzIDEtMSAxeiIgZmlsbD0iI2JkYzNjNyIvPjxyZWN0IGlkPSJSZWN0YW5nbGUtcGF0aCIgZmlsbD0iIzI5ODBiYSIgaGVpZ2h0PSI2IiByeD0iMSIgd2lkdGg9IjMwIiB4PSI1IiB5PSIxMyIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTM1IDI0aC0yOWMtLjU1MjI4NDc1IDAtMS0uNDQ3NzE1My0xLTFzLjQ0NzcxNTI1LTEgMS0xaDI5Yy41NTIyODQ3IDAgMSAuNDQ3NzE1MyAxIDFzLS40NDc3MTUzIDEtMSAxeiIgZmlsbD0iIzNiOTdkMyIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTMyIDI4aC0yNmMtLjU1MjI4NDc1IDAtMS0uNDQ3NzE1My0xLTFzLjQ0NzcxNTI1LTEgMS0xaDI2Yy41NTIyODQ3IDAgMSAuNDQ3NzE1MyAxIDFzLS40NDc3MTUzIDEtMSAxeiIgZmlsbD0iIzNiOTdkMyIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTMwIDMyaC0yNGMtLjU1MjI4NDc1IDAtMS0uNDQ3NzE1My0xLTFzLjQ0NzcxNTI1LTEgMS0xaDI0Yy41NTIyODQ3IDAgMSAuNDQ3NzE1MyAxIDFzLS40NDc3MTUzIDEtMSAxeiIgZmlsbD0iIzNiOTdkMyIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTI4IDM2aC0yMmMtLjU1MjI4NDc1IDAtMS0uNDQ3NzE1My0xLTFzLjQ0NzcxNTI1LTEgMS0xaDIyYy41NTIyODQ3IDAgMSAuNDQ3NzE1MyAxIDFzLS40NDc3MTUzIDEtMSAxeiIgZmlsbD0iIzNiOTdkMyIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTMyLjEzIDQwaC0yNi4xM2MtLjU1MjI4NDc1IDAtMSAuNDQ3NzE1My0xIDF2MTJjMCAuNTUyMjg0Ny40NDc3MTUyNSAxIDEgMWg0NmMuNTUyMjg0NyAwIDEtLjQ0NzcxNTMgMS0xdi0xMmMwLS41NTIyODQ3LS40NDc3MTUzLTEtMS0xaC0xMC44MiIgZmlsbD0iIzNiOTdkMyIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTM4LjYxIDQ0Ljg1LTYuMyA1LjM1Yy0uMzEyMDY1My4yNjM4NjgxLS43NTMyODg1LjMxMTI5NzUtMS4xMTQzMDUzLjExOTc4MjUtLjM2MTAxNjktLjE5MTUxNTEtLjU2OTE3MjMtLjU4MzQzMTgtLjUyNTY5NDctLjk4OTc4MjVsLjg3LTguMjJjNC4wMzYuNjc5IDMuOTYuNDkgNy4wNyAzLjc0eiIgZmlsbD0iI2Y5ZWFiMCIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTQ1Ljg0IDIyLjY2LTEwLjI5IDE5LjQ0Yy0xLjEyNi0uNTkyLTEuOTExLS42MzctNC4wMS0uOTlsMTAuNzctMjAuMzN6IiBmaWxsPSIjZjNkNTViIi8+PHBhdGggaWQ9IlNoYXBlIiBkPSJtNDkuMzcgMjQuNTMtMTAuNzYgMjAuMzJjLS44NTY1ODY1LTEuMDgzNjQxNi0xLjg5MTM2MTktMi4wMTM1ODY4LTMuMDYtMi43NWwxMC4yOS0xOS40NHoiIGZpbGw9IiNmMGM0MTkiLz48cGF0aCBpZD0iU2hhcGUiIGQ9Im01Mi42NSAxOC4zNC0xLjQgMi42NS03LjA3LTMuNzQgMS40LTIuNjVjLjM3MTg3MzItLjcwNDkwMzMgMS4wMDg5NTA2LTEuMjMyODY0MSAxLjc3MDY0NzYtMS40NjczNzY3Ljc2MTY5NjktLjIzNDUxMjYgMS41ODU0MDM4LS4xNTYzMDA3IDIuMjg5MzUyNC4yMTczNzY3bDEuNzYuOTNjLjcwNDkwMzMuMzcxODczMiAxLjIzMjg2NDEgMS4wMDg5NTA2IDEuNDY3Mzc2NyAxLjc3MDY0NzYuMjM0NTEyNi43NjE2OTY5LjE1NjMwMDcgMS41ODU0MDM4LS4yMTczNzY3IDIuMjg5MzUyNHoiIGZpbGw9IiNkNzVlNzIiLz48cGF0aCBpZD0iU2hhcGUiIGQ9Im01MS4yNSAyMC45OS0xLjg4IDMuNTRjLTQuMjM3LTIuMjQ1LTIuNjE1LTEuMzgzLTcuMDYtMy43NWwxLjg3LTMuNTN6IiBmaWxsPSIjYmRjM2M3Ii8+PGcgZmlsbD0iIzlmYzlkMyI+PHBhdGggaWQ9IlNoYXBlIiBkPSJtMTAgNTFoLTJjLS41NTIyODQ3NSAwLTEtLjQ0NzcxNTMtMS0xcy40NDc3MTUyNS0xIDEtMWgyYy41NTIyODQ3IDAgMSAuNDQ3NzE1MyAxIDFzLS40NDc3MTUzIDEtMSAxeiIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTE2IDUxaC0yYy0uNTUyMjg0NyAwLTEtLjQ0NzcxNTMtMS0xcy40NDc3MTUzLTEgMS0xaDJjLjU1MjI4NDcgMCAxIC40NDc3MTUzIDEgMXMtLjQ0NzcxNTMgMS0xIDF6Ii8+PHBhdGggaWQ9IlNoYXBlIiBkPSJtMjIgNTFoLTJjLS41NTIyODQ3IDAtMS0uNDQ3NzE1My0xLTFzLjQ0NzcxNTMtMSAxLTFoMmMuNTUyMjg0NyAwIDEgLjQ0NzcxNTMgMSAxcy0uNDQ3NzE1MyAxLTEgMXoiLz48cGF0aCBpZD0iU2hhcGUiIGQ9Im0yNyA1MWgtMWMtLjU1MjI4NDcgMC0xLS40NDc3MTUzLTEtMXMuNDQ3NzE1My0xIDEtMWgxYy41NTIyODQ3IDAgMSAuNDQ3NzE1MyAxIDFzLS40NDc3MTUzIDEtMSAxeiIvPjxwYXRoIGlkPSJTaGFwZSIgZD0ibTM4IDUxaC0xYy0uNTUyMjg0NyAwLTEtLjQ0NzcxNTMtMS0xcy40NDc3MTUzLTEgMS0xaDFjLjU1MjI4NDcgMCAxIC40NDc3MTUzIDEgMXMtLjQ0NzcxNTMgMS0xIDF6Ii8+PHBhdGggaWQ9IlNoYXBlIiBkPSJtNDQgNTFoLTJjLS41NTIyODQ3IDAtMS0uNDQ3NzE1My0xLTFzLjQ0NzcxNTMtMSAxLTFoMmMuNTUyMjg0NyAwIDEgLjQ0NzcxNTMgMSAxcy0uNDQ3NzE1MyAxLTEgMXoiLz48cGF0aCBpZD0iU2hhcGUiIGQ9Im01MCA1MWgtMmMtLjU1MjI4NDcgMC0xLS40NDc3MTUzLTEtMXMuNDQ3NzE1My0xIDEtMWgyYy41NTIyODQ3IDAgMSAuNDQ3NzE1MyAxIDFzLS40NDc3MTUzIDEtMSAxeiIvPjwvZz48L2c+PC9zdmc+" />
                                <div className="advices">

                                    <p className="important">Add a summary about your expertise and interests <br></br> <span>Summary is the #1 thing recruiters look at while viewing profiles</span></p>


                                </div>

                            </Carousel.Item>
                            <Carousel.Item>
                                <div>

                                </div>
                                <img src="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTEyIDUxMiIgaGVpZ2h0PSI1MTIiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiB3aWR0aD0iNTEyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnPjxnPjxwYXRoIGQ9Im0zMzYuODM1IDU0LjgwNmMtLjgzMS0uNjM0LTguNTI3LTYuMzU5LTIyLjIzNi0xMS44NjgtMTcuNjYxLTcuMDk4LTM3LjkyNi0xMC44NS01OC42MDMtMTAuODVzLTQwLjk0MSAzLjc1Mi01OC42MDQgMTAuODVjLTEzLjcwOCA1LjUwOS0yMS40MDQgMTEuMjM0LTIyLjIzNiAxMS44NjktNC4xNzQgMy4xODMtNi42MjQgOC4xMzItNi42MjQgMTMuMzgxdjI2LjQwMWwxNi44MjcgOSAxNi44MjgtOXYtMTYuODcyYzkuMjM1LTQuNzEzIDI3LjcwMy0xMS45NzUgNTMuODA4LTExLjk3NSAyNi4xMDYgMCA0NC41NzMgNy4yNjIgNTMuODA4IDExLjk3NXYxNi44NzFsMTYuODI3IDkgMTYuODI4LTl2LTI2LjRjLjAwMi01LjI1LTIuNDQ4LTEwLjE5OS02LjYyMy0xMy4zODJ6IiBmaWxsPSIjZTg4MzRkIi8+PGcgZmlsbD0iI2Q2NmU0MSI+PHBhdGggZD0ibTE2OC41MzMgOTQuNTg5djE4LjU4bDE2LjgyOCA5IDE2LjgyOC05di0xOC41OHoiLz48cGF0aCBkPSJtMzQzLjQ2IDk0LjU4OWgtMzMuNjU1djE4LjU4bDE2LjgyOCA5IDE2LjgyNy05eiIvPjwvZz48cGF0aCBkPSJtMTMuMjQ3IDI5OC4yODZ2MTQ5LjQ5MmMwIDE3Ljc0NyAxNC4zODcgMzIuMTM0IDMyLjEzNCAzMi4xMzRoNDIxLjIzOGMxNy43NDcgMCAzMi4xMzQtMTQuMzg3IDMyLjEzNC0zMi4xMzR2LTE0OS40OTJ6IiBmaWxsPSIjMzY1ZTdkIi8+PHBhdGggZD0ibTEzLjI0NyAyNzkuNzA2djE4LjU4MWMyNi42OTYgMjEuMTk2IDk3LjI1MiA2Mi4zNDMgMjQyLjc1MyA2Mi4zNDNzMjE2LjA1Ny00MS4xNDcgMjQyLjc1My02Mi4zNDR2LTE4LjU4MWgtNDg1LjUwNnoiIGZpbGw9IiMyYjRkNjYiLz48cGF0aCBkPSJtMTEuODUyIDI2OS4wMDVjMjUuNTg1IDIwLjgzIDk2LjA0MyA2My40NjQgMjQ0LjE0OCA2My40NjRzMjE4LjU2Mi00Mi42MzQgMjQ0LjE0OC02My40NjRjNy41LTYuMTA2IDExLjg1Mi0yNC4yNTYgMTEuODUyLTMzLjkyN3YtODkuNzc1YzAtMTcuNzQ3LTE0LjM4Ny0zMi4xMzQtMzIuMTM0LTMyLjEzNGgtNDQ3LjczMmMtMTcuNzQ3IDAtMzIuMTM0IDE0LjM4Ny0zMi4xMzQgMzIuMTM0djg5Ljc3NWMwIDkuNjcxIDQuMzUyIDI3LjgyMSAxMS44NTIgMzMuOTI3eiIgZmlsbD0iIzQwNzA5MyIvPjxwYXRoIGQ9Im01MDAuMTQ4IDI2MC4wMDVjLTI1LjU4NSAyMC44My05Ni4wNDMgNjMuNDY0LTI0NC4xNDggNjMuNDY0cy0yMTguNTYyLTQyLjYzNS0yNDQuMTQ4LTYzLjQ2NGMtNy41LTYuMTA2LTExLjg1Mi0xNS4yNTYtMTEuODUyLTI0LjkyN3YxOC41ODFjMCA5LjY3MSA0LjM1MiAxOC44MjEgMTEuODUyIDI0LjkyNyAyNS41ODUgMjAuODMgOTYuMDQzIDYzLjQ2NCAyNDQuMTQ4IDYzLjQ2NHMyMTguNTYyLTQyLjYzNCAyNDQuMTQ4LTYzLjQ2NGM3LjUtNi4xMDYgMTEuODUyLTE1LjI1NiAxMS44NTItMjQuOTI3di0xOC41ODFjMCA5LjY3MS00LjM1MiAxOC44MjEtMTEuODUyIDI0LjkyN3oiIGZpbGw9IiMzNjVlN2QiLz48cGF0aCBkPSJtMjU1Ljk5NyAzNzIuOTc0YzE2LjYyNCAwIDMwLjEtMTIuMzQ0IDMwLjEtMzkuMXYtMTguMjVjMC01LjkxNi00Ljc5Ni0xMC43MTEtMTAuNzExLTEwLjcxMWgtMzguNzc4Yy01LjkxNiAwLTEwLjcxMSA0Ljc5Ni0xMC43MTEgMTAuNzExdjE4LjI1M2MtLjAwMSAyNi43NTMgMTMuNDc2IDM5LjA5NyAzMC4xIDM5LjA5N3oiIGZpbGw9IiNmZmUyN2EiLz48cGF0aCBkPSJtMjU1Ljk5NyAzNjMuOTc0Yy0xNi42MjQgMC0zMC4xLTEzLjQ3Ni0zMC4xLTMwLjF2MTguNTgxYzAgMTYuNjI0IDEzLjQ3NiAzMC4xIDMwLjEgMzAuMXMzMC4xLTEzLjQ3NiAzMC4xLTMwLjF2LTE4LjU4MWMwIDE2LjYyMy0xMy40NzYgMzAuMS0zMC4xIDMwLjF6IiBmaWxsPSIjZjljZjU4Ii8+PC9nPjwvZz48L3N2Zz4=" />
                                <div className="advices">

                                    <p className="important">Where do you currently work? <br></br><span>Over 2 million people search by current position on LinkedIn every week</span></p>


                                </div>

                            </Carousel.Item>
                        </Carousel>
                    </div>

                }



            </div>

            {/* ============Dashboard=============== */}

            <div className="App">
                <Dashboard />
            </div>

            {/* =================Experiences section=============== */}

            <Experiences />

            <Activity />
            <Education />
        </Col >



    )


}

export default ProfileMain