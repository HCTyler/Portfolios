import "./App.scss";
import "./icons.scss"
import Homepage from "./pages/Homepage"
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import NavBar from "./components/NavBar"



function App() {
  return (
  <>
    <Homepage/>
    <NavBar/>
    <Project/>
    <Contact/>

  </>
  )
}

export default App;
