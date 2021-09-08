import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

const AppList = () => {
  return (
    <>
      <ul>
        <li>My First Element</li>
        <li>My Second Element</li>
      </ul>
    </>
  );
};

const AppHeader = () => {
  return <h1>Hello World 2</h1>;
};

const App2 = () => {
  return (
    <>
      <AppHeader />
      <AppList />
    </>
  );
};

ReactDom.render(<App2 />, document.getElementById('root'));
