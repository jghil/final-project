import React from 'react';
// import Home from './pages/home';
import Navbar from './components/navbar';
import CreateRecipe from './components/create-recipe';
// import parseRoute from './lib/parse-route.js';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // route: parseRoute(window.location.hash),
      recipes: []
    };
    this.addRecipe = this.addRecipe.bind(this);
  }

  // componentDidMount() {
  //   fetch('/api/recipes')
  //     .then(res => res.json())
  //     .then(recipeItems => this.setState({ recipes: recipeItems }));
  // }

  addRecipe(newRecipe) {
    fetch('/api/recipes', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRecipe)
    })
      .then(res => res.json())
      .then(newRecipe => this.setState({
        recipes: this.state.recipes.concat(newRecipe)
      }));
  }

  render() {
    return (
      <div className="background-picture">
        <Navbar/>
        <CreateRecipe onSubmit={this.addRecipe}/>
      </div>
    );
  }
}
