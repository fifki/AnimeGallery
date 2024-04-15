import './App.css';
import Header from './layout/Header';
import Main from './layout/Main';
import SideBar from './layout/SideBar';

function App() {
  return (
    <div class="main-container">
    <div class="header">
      <Header brand='Anime'/>
    </div>
    <div class="sidebar"><SideBar /></div>
    <div class="main"><Main /></div>
  </div>
  )
}

export default App;
