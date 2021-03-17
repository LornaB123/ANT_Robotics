import { useState } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Product from './Product'
import Benefits from './Benefits'
import Gallery from './Gallery'
import CustomerBenefit from './CustomerBenefit'
import Callout from './Callout'
import Popup from './Popup'
import data from '../utils/data.json'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="page">
      <NavBar />
      <Banner />
      <Product products={data.products} />
      <Benefits benefits={data.beneifts} />
      <Gallery pictures={data.pictures} />
      <CustomerBenefit customerBenefits={data.customerBenefits} />
      <Callout toggle={toggle} />
      <Popup isOpen={isOpen} toggle={toggle} />
    </div>
  );
}

export default App;
