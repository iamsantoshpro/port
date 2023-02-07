import './App.css';
import Header from './Component/Header'
import Banner from './Component/Banner'
import Hello from './Component/Hello'
import Resume from './Component/Resume'
import Portfolio from './Component/Portfolio'
import Testimonials from './Component/Testimonials'
import Blog from './Component/Blog'
import Contact from './Component/Contact'


function App() {
  return (
    <div className="App">


      <Header />
      <Banner 
        name="Santosh Kumar" 
        designation="Team Lead - Hubspot CMS Developer and Frontend Developer"
        address="Sector 91, Faridabad Haryana India"
        email="santosh.bm302@gmail.com"
        phone="+918802826913"
        />
        <Hello />
        <Resume />
        <Portfolio />
        <Testimonials />
        <Blog />
        <Contact />
        
    </div>
  );
}

export default App;
