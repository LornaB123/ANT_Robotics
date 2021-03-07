import NavBar from './NavBar'
import Robot from './Robot'
import vector from '../images/Vector 11.svg'

function App() {
  return (
    <div className="page">
      <NavBar />
      <div style={{height: '100vh', background: '#000'}}>
        {/* <img src={vector} style={{height: '200px', width: '200px'}}></img> */}
      </div>
      <Robot />
      {/* <div style={{height: '100vh', background: '#fff', marginTop: '10px'}}></div> */}
    </div>
  );
}

export default App;
