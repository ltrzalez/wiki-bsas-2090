import logo2 from "./pp.jfif";
import Header from "./components/Header";
// import FullCharacter from "./components/FullCharacter";
import Pj from "./components/Pj";
import Footer from "./components/Footer";

function App() {
  console.log(logo2);  

  return (
    <div
     style={{ backgroundImage: `url(${logo2})` }}
    >
      <Header/>
      <Pj />
      <Footer />
    </div>
    
  );
}

export default App;
