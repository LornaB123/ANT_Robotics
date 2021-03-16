import NavBar from './NavBar'
import Banner from './Banner'
import Product from './Product'
import Gallery from './Gallery'
import data from '../utils/data.json'

function App() {
  return (
    <div className="page">
      <NavBar />
      <Banner />
      <Product products={data.products} />
      <Gallery pictures={data.pictures} />
    </div>
  );
}

export default App;
