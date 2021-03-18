import { useState, useRef } from 'react'
import NavBar from './NavBar'
import Banner from './Banner'
import Product from './Product'
import Benefits from './Benefits'
import Gallery from './Gallery'
import CustomerBenefit from './CustomerBenefit'
import Team from './Team'
import Callout from './Callout'
import Popup from './Popup'
import data from '../utils/data.json'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const bannerRef = useRef()
  const productRef = useRef()
  const benefitsRef = useRef()
  const galleryRef = useRef()
  const customerBenefitsRef = useRef()
  const teamRef = useRef()

  function toggle() {
    setIsOpen(!isOpen)
  }

  return (
    <div className="page">
      <NavBar 
        bannerRef={bannerRef} 
        productRef={productRef}
        benefitsRef={benefitsRef}
        galleryRef={galleryRef}
        customerBenefitsRef={customerBenefitsRef}
        teamRef={teamRef}
        />
      <Banner 
        bannerRef={bannerRef} 
        />
      <Product 
        productRef={productRef} 
        products={data.products} 
        />
      <Benefits 
        benefitsRef={benefitsRef} 
        benefits={data.beneifts} 
        />
      <Gallery 
        galleryRef={galleryRef} 
        pictures={data.pictures} 
        />
      <CustomerBenefit 
        customerBenefitsRef={customerBenefitsRef}
        customerBenefits={data.customerBenefits} 
        />
      <Team 
        teamRef={teamRef} 
        team={data.team} 
        />
      <Callout toggle={toggle} />
      <Popup isOpen={isOpen} toggle={toggle} />
    </div>
  );
}

export default App;
