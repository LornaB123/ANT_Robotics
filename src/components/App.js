import NavBar from './NavBar'
import Robot from './Robot'
import data from '../utils/data.json'

function App() {
  return (
    <div className="page">
      <NavBar />
      <div style={{height: '100vh', background: '#000'}}>
        {/* <img src={vector} style={{height: '200px', width: '200px'}}></img> */}
      </div>
      <Robot products={data.products} />
      {/* <div style={{height: '100vh', background: '#fff', marginTop: '10px'}}></div> */}
    </div>
  );
}

export default App;
