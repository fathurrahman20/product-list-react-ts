import './App.css';
import Header from './components/header';
import CardProduct from './components/card';
import ProductList from './layout/product-list';

function App() {
  return (
    <>
      <Header />
      <ProductList>
        <CardProduct />
      </ProductList>
    </>
  );
}

export default App;
