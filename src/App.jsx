import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CustomItemContext from "./context/ItemContext";

function App() {
  return (
    <CustomItemContext>
      <Header />
      <ProductList />
    </CustomItemContext>
  );
}

export default App;
