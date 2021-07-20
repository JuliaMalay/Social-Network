import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: 'Alexander'},
  {id: 2, name: 'Toxa'},
  {id: 3, name: 'RomanK'},
  {id: 4, name: 'JuliaM'},
  {id: 5, name: 'Rom4ik'},
];

let messages = [
  {id: 1, message: 'Hello!'},
  {id: 2, message: "What's up!"},
  {id: 3, message: 'Good morning!'},
  {id: 4, message: 'How are you?'},
  {id: 5, message: 'I love you'},
];
let posts = [
  {id: 1, message: 'I bought a new dress today', likesCount: 15},
  {id: 2, message: 'I believe i can fly', likesCount: 125},
  {id: 3, message: 'Show must go on!', likesCount: 364},
  {id: 4, message: 'I learn React', likesCount: 185},
  {id: 5, message: 'hello world!', likesCount: 1},
];

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
