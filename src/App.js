import "./App.scss";
import "./icons.scss"
import Homepage from "./pages/Homepage"
import Contact from "./pages/Contact";
import Project from "./pages/Project";
import Information from "./pages/AboutMe"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer";



function App() {
  return (
  <>
    <Homepage/>
    <NavBar/>
    <Project/>
    <Information/>
    <Contact/>
    <Footer/>

  </>
  )
}

export default App;
