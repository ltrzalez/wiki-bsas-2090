import logo2 from "./pp.jfif";
import Header from "./components/Header";
// import FullCharacter from "./components/FullCharacter";
import Pj from "./components/Pj";
import Footer from "./components/Footer";
import {
  Box,
  Container,
  Row,
  Column,
  Heading,
  FooterLink,
  Index,
  Clase,
} from "./styled-components/FooterStyle";

function App() {
  console.log(logo2);  

  return (
    <div
     style={{ backgroundImage: `url(${logo2})` }}
    >
      <Index>
        
        <Header/>       
        <Pj />               
        <Footer />
        
      </Index>
    </div>
    
  );
}

export default App;
