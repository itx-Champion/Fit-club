import './App.css';
import Footer from './Components/Footer/Footer';
import Hero from './Components/Hero/Hero';
import Join from './Components/Join/Join';
import Plans from './Components/Plans/Plans';
import Programs from './Components/Programs/Programs';
import Reasons from './Components/Reasons/Reasons';
import Testimonials from './Components/Testimonials/Testimonials';

function App() {
  return (
    <div className="App">
     <Hero/>
     <Programs/>
     <Reasons/>
     <Plans/>
     <Testimonials/>
     <Join/>
     <Footer/>
    </div>
  );
}

export default App;
