import "./app.scss"
import Navbar from "./component/navbar/Navbar"
import Hero from "./component/hero/Hero";
import Parallax from "./component/parallax/Parallax"
import Services from "./component/services/Services";
import Portfolio from "./component/portfolio/Portfolio";
// import Test from "./Test"

const App = () => {
  return <div>
    <section id="HomePage">
      <Navbar/>
      <Hero/>
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <section><Services/></section>
    <section id="Portfolio"><Parallax type="portfolio"/></section>
    <Portfolio/>
    <section id="Contact">contact</section>

  </div>;
};

export default App;
