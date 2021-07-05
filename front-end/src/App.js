import logo from './logo.svg';
import './App.sass';
import { Button, DatePicker } from 'antd';
import 'antd/dist/antd.css';
import RouterURL from './router/router';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Footer from './app/pages/footer/footer';
import Header from './app/pages/header/header';


function App() {
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //     <h1>antd version</h1>
  //     <Button type="primary">PRESS ME</Button>
  //     <DatePicker placeholder="select date" />
  //     </header>
  //   </div>
  // );

  return (
    <Router>
      <div className="App">

        <RouterURL></RouterURL>
      </div>
    </Router>
  )
}

export default App;
