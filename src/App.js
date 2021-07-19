import './App.css';
import Header from './сomponents/Header';
import Navbar from './сomponents/Navbar';
import Profile from './сomponents/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Navbar />
      <Profile />
      <footer></footer>
    </div>
  );
};

export default App;
