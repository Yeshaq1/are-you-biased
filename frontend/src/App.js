import Home from "./views/Home";
import Header from "./components/Header";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <main className="py-3">
        <Container>
          <Home />
        </Container>
      </main>
      <Footer />
    </div>
  );
}

export default App;
