import { useState } from "react";
import { Container } from "react-bootstrap";
import Category from "./components/Category";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import MyNavbar from "./components/Navbar";
import { items } from "./data";

function App() {
  const [itemsData, setitemsData] = useState(items);
  return (
    <div className="App">
      <MyNavbar />
      <Container>
        <Header />
        <Category />
        
          <ItemsList items={itemsData} />
      </Container>
    </div>
  );
}

export default App;
