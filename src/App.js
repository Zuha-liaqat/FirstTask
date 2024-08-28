import './App.css';
import Navbar from './Task/Header/Navbar';
import Footer from './Task/Footer/Footer';
import Row from './Task/Section/Row';
import Firstsection from './Task/Section/Firstsection';
import Secondsection from './Task/Section/Secondsection';
import Thirdsection from './Task/Section/Thirdsection';


function App() {
  return (
    <>
    <Navbar/>
    <Firstsection/>
    <Row/>
    <Secondsection/>
    <Thirdsection/>
    <Footer/>
    </>
  );
}

export default App;
