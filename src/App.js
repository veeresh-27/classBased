import { Component } from 'react/cjs/react.production.min';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import ProductData from './components/ProductData';
import Layout from './components/Layout/Layout';

class App extends Component {
  render(){
    return (
      <div className="App">
        <Navbar/>
        <Layout/>
      </div>
    );
  }
  
}

export default App;
