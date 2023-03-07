
import './App.css';
import CardImg from './components/card';
import Jumbotron from './components/jumbotron';
import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Jumbotron />
        <CardImg />
      </div>

    </>
  );
}



export default App;



