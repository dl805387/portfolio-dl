import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

function App() {
    return (
        <div>
            <div id='stars'></div>
            <div id='stars2'></div>
            <div id='stars3'></div>

            <About/>
            <Skills/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App;