import React from 'react';
// import Home from './pages/home';
import Navbar from './components/navbar';
import CreateRecipe from './components/create-recipe';
import BackGround from './components/background';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar/>
        <BackGround />
        <CreateRecipe />
      </div>
    );
  }
}
