import { Container } from "react-bootstrap";
import Category from "./components/Category";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import MyNavbar from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <MyNavbar />
      <Container>
        <Header />
        <Category />
        <ItemsList />
        <ItemsList />
        <ItemsList />
        <ItemsList />
        <ItemsList />
      </Container>
    </div>
  );
}

export default App;
