import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Banda />} />
          <Route path="/bandas" element={<Banda />} />
          <Route path="/bandas/:bandaId" element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
 }
 
 export default App;
