import logo from './logo.svg';
import Navbar from './components/Shared/Navbar';
import './App.css';
import Banner from './components/Banner/Banner';
import Menu from './components/Menu/Menu';
import Posts from './components/Posts/Posts';
import Body from './components/Posts/Body';

function App() {
  return (
    <div >
      <Navbar></Navbar>
      <Banner></Banner>
      <Menu></Menu>
      <Body></Body>

    </div>
  );
}

export default App;
