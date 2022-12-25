import { useState } from "react";
import { Container } from "react-bootstrap";
import Category from "./components/Category";
import Header from "./components/Header";
import ItemsList from "./components/ItemsList";
import MyNavbar from "./components/Navbar";
import { items } from "./data";

function App() {
  const [itemsData, setitemsData] = useState(items);
  const Categories = ["all", ...new Set(items.map((i) => i.category))]; // get only unique from duplicated
  const filterByCategory = (cat) => {
    if (cat === "all") {
      setitemsData(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setitemsData(newArr);
    }
  };

  const onSearch = (val) => {
    setitemsData(items.filter((item) => item.title ===  val));
  };
  return (
    <div className="App">
      <MyNavbar onSearch={onSearch} />
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} Categories={Categories} />
        <ItemsList items={itemsData} />
      </Container>
    </div>
  );
}

export default App;
