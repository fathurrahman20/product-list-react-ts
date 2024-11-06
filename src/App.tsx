// import { useState } from 'react';
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
// import { useState } from 'react';
import './App.css';
// import Button from './components/button';
import Header from './components/header';
import CardProduct from './components/card';
import ProductList from './layout/product-list';

function App() {
  // const [count, setCount] = useState(0);

  return (
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button
    //       type="button"
    //       className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
    //       onClick={() => setCount(count => count + 1)}
    //     >
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    // </>
    <>
      <Header />
      <ProductList>
        <CardProduct />
      </ProductList>
      <div className="flex justify-center gap-x-10">
        {/* <Button count={count} onSetCount={setCount} status="minus" />
        <p className="my-auto">{count}</p>
        <Button count={count} onSetCount={setCount} status="plus" /> */}
      </div>
    </>
  );
}

export default App;
