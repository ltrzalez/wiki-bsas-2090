import logo2 from "./pp.jfif";
import Title from "./components/Title";
import FullCharacter from "./components/FullCharacter";

function App() {
  console.log(logo2);  

  return (
    <div style={{ backgroundImage: `url(${logo2})` }}>
      <Title />       
      {/* <FullCharacter /> */}
    </div>
    
  );
}

export default App;
