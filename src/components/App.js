import NavBar from './NavBar'
import Banner from './Banner'
import Product from './Product'
import Benefits from './Benefits'
import Contacts from './Contacts'
import data from '../utils/data.json'

function App() {
  return (
    <div className="page">
      <NavBar />
      <Banner />
      <Product products={data.products} />
      <Benefits />
      <Contacts />
    </div>
  );
}

export default App;
