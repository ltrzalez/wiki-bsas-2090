import logo2 from "./pp.jfif";
import Title from "./components/Title";

function App() {
  console.log(logo2);  

  return (
    <div style={{ backgroundImage: `url(${logo2})` }}>
      <Title />       
    </div>
  );
}

export default App;
