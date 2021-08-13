import "./App.css";
import Header from "./containers/header";
import Projects from "./containers/projects";
import Contact from "./containers/contact";
import Cv from "./containers/cv";

function App() {
    return (
        <div>
            <Header />
            <Projects />
            <Contact />
            <Cv />
        </div>
    );
}

export default App;
