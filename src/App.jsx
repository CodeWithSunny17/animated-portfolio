import "./app.scss"
import Navbar from "./component/navbar/Navbar"
// import Test from "./Test"

const App = () => {
  return <div>
    <section id="HomePage">
      <Navbar/>
    </section>
    <section>Parallax</section>
    <section id="Services">Services</section>
    <section>Parallax</section>
    <section id="Portfolio">Portfolio1</section>
    <section>Portfolio2</section>
    <section>portfolio3</section>
    <section id="Contact">contact</section>

  </div>;
};

export default App;
