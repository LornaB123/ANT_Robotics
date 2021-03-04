import NavBar from './NavBar'

function App() {
  return (
    <div className="page">
      <NavBar />
      <div style={{height: '100vh', background: '#000'}}></div>
      <div style={{height: '100vh', background: '#fff', marginTop: '10px'}}></div>
    </div>
  );
}

export default App;
