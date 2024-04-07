import "./App.css";
import Navbar from "./partials/navbar"
import Hero from "./partials/Hero"
import Feature from "./partials/Feature";
import About from "./partials/About"
import Footer from "./partials/Footer"

function App() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Feature />
      <About />
      <Footer />
    </main>
  );
}

export default App;
