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
        <Navbar friends={props.state.sideBar.friends} />
        <div className="app-wrapper-content">
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs
                dialogs={props.state.dialogPage.dialogs}
                messages={props.state.dialogPage.messages}
                newMessageText={props.state.dialogPage.newMessageText}
                dispatch={props.dispatch}
                // addMessage={props.addMessage}
                // updateNewMessageText={props.updateNewMessageText}
              />
            )}
          />
          <Route
            path="/profile"
            render={() => (
              <Profile
                profilePage={props.state.profilePage}
                dispatch={props.dispatch}
                // addPost={props.addPost}
                // updateNewPostText={props.updateNewPostText}
              />
            )}
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
