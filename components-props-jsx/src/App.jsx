import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Cards from "./components/Cards";

function App() {
  return (
    <>
      <Navbar />
      <div className="cards">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
        </div>
      <Footer />
    </>
  );
}

export default App;
