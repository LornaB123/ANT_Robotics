import NavBar from './NavBar'
import Banner from './Banner'
import Product from './Product'
import data from '../utils/data.json'

function App() {
  return (
    <div className="page">
      <NavBar />
      <Banner />
      <Product products={data.products} />
    </div>
  );
}

export default App;
