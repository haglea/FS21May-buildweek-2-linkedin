import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import ProfileMain from "./Components/ProfileMain";
import "bootstrap/dist/css/bootstrap.min.css";
import Dashboard from "./Components/Dashboard";
import LinkedinFooter from './Components/LinkedinFooter';
import LinkedinNavbar from './Components/LinkedinNavbar';

function App() {
  return (
    <div className="App">
      <LinkedinNavbar />    
      <ProfileMain />
      <Dashboard />
      <LinkedinFooter />
    </div>
  );
}

export default App;
