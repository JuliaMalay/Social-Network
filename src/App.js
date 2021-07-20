import './App.css';
import Header from './сomponents/Header/Header';
import Navbar from './сomponents/Navbar/Navbar';
import Profile from './сomponents/Profile/Profile';
import Dialogs from './сomponents/Dialogs/Dialogs';
import News from './сomponents/News/News';
import Music from './сomponents/Music/Music';
import Settings from './сomponents/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs dialogs={props.dialogs} messages={props.messages} />
            )}
          />
          <Route
            path="/profile"
            render={() => <Profile posts={props.posts} />}
          />
          <Route
            path="/news"
            render={() => {
              <News />;
            }}
          />
          <Route
            path="/music"
            render={() => {
              <Music />;
            }}
          />
          <Route
            path="/settings"
            render={() => {
              <Settings />;
            }}
          />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
