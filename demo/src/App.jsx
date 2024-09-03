import "./App.css";
import Header from "./Header";
import Footer from "./Footer";
import Section from "./Section";

function App() {
  /*function printName(param) {
    return <div>{param}</div>;
  }*/
  return (
    <div className="main">
      <Header />
      <Footer />
      <Section />
    </div>
  );
}
export default App;
