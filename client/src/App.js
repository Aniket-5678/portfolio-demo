import Layout from './components/Layout/Layout';
import './App.css';
import About from './components/pages/About';
import Techstack from './components/pages/Techstack';
import Projects from './components/pages/Projects';
import Education from './components/pages/Education';
import Contact from './components/pages/Contact';
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from './context/ThemeContext';
import Tada from "react-reveal/Tada"
import Mobilemenu from './components/Mobilemenu';
import Homepage from './components/pages/Homepage';
import{ Toaster } from 'react-hot-toast';

function App() {

const [theme] = useTheme()

  return (
    
    <div id={theme}>
      <Toaster/>
       <div>
       <Mobilemenu/>
       </div>
    <div>
       
        <Layout />
        <div className='container'>
          <Homepage/>
        <About/>
        <Education/>
        <Techstack/>
        <Projects/>
        <Contact/>
        </div>
        <div className='footer-container'>
          <Tada>
          <h2 className='footer-text'>made By 😊 Aniket tech @ 2024 </h2>
          </Tada>
        </div>
        </div>
        <ScrollToTop 
        smooth
        color='white'
        style={{backgroundColor: "#2874F0" , borderRadius: "80px"}} />
        
    </div>
  );
}

export default App;
