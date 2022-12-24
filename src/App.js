import { Container } from "react-bootstrap";
import Category from "./components/Category";
import Header from "./components/Header";
import MyNavbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container>
        <Header />
        <Category />
      </Container>
    </div>
  );
}

export default App;
