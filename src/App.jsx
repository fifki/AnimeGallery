import './App.css';
import Header from './layout/Header';
import Main from './layout/Main';
import SideBar from './layout/SideBar';

function App() {
  return (
    <div className="main-container">
    <div className="header">
      <Header brand='Anime'/>
    </div>
    {/* <div className="sidebar"><SideBar /></div> */}
    <div className="main"><Main /></div>
  </div>
  )
}

export default App;
