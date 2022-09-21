import React from 'react';

export default class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      ingredients: '',
      amount: '',
      directions: '',
      image: '',
      prepTime: '',
      cookTime: '',
      beverage: false,
      breakfastBrunch: false,
      lunch: false,
      snack: false,
      dinner: false,
      cuisine: '',
      skillLevel: 'easy',
      tags: ''
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleIngredientsChange = this.handleIngredientsChange.bind(this);
    this.handleAmountChange = this.handleAmountChange.bind(this);
    this.handleDirectionsChange = this.handleDirectionsChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handlePrepTimeChange = this.handlePrepTimeChange.bind(this);
    this.handleCookTimeChange = this.handleCookTimeChange.bind(this);
    this.handleBeverageChange = this.handleBeverageChange.bind(this);
    this.handleBreakfastBrunchChange = this.handleBreakfastBrunchChange.bind(this);
    this.handleLunchChange = this.handleLunchChange.bind(this);
    this.handleSnackChange = this.handleSnackChange.bind(this);
    this.handleDinnerChange = this.handleDinnerChange.bind(this);
    this.handleCuisineChange = this.handleCuisineChange.bind(this);
    this.handleSkillLevelChange = this.handleSkillLevelChange.bind(this);
    this.handleTagsChange = this.handleTagsChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleTitleChange(event) {
    this.setState({
      title: event.target.value
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  handleIngredientsChange(event) {
    this.setState({
      ingredients: event.target.value
    });
  }

  handleAmountChange(event) {
    this.setState({
      amount: event.target.value
    });
  }

  handleDirectionsChange(event) {
    this.setState({
      directions: event.target.value
    });
  }

  handleImageChange(event) {
    this.setState({
      image: event.target.value
    });
  }

  handlePrepTimeChange(event) {
    this.setState({
      prepTime: event.target.value
    });
  }

  handleCookTimeChange(event) {
    this.setState({
      cookTime: event.target.value
    });
  }

  handleBeverageChange() {
    this.setState({
      beverage: !this.state.beverage
    });
  }

  handleBreakfastBrunchChange() {
    this.setState({
      breakfastBrunch: !this.state.breakfastBrunch
    });
  }

  handleLunchChange() {
    this.setState({
      lunch: !this.state.lunch
    });
  }

  handleSnackChange() {
    this.setState({
      snack: !this.state.snack
    });
  }

  handleDinnerChange() {
    this.setState({
      dinner: !this.state.dinner
    });
  }

  handleCuisineChange(event) {
    this.setState({
      cuisine: event.target.value
    });
  }

  handleSkillLevelChange(event) {
    this.setState({
      skillLevel: event.target.value
    });
  }

  handleTagsChange(event) {
    this.setState({
      tags: event.target.value
    });
  }

  handleSubmit(event) {
    // console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <div className="container shadow my-5 pb-5 rounded" id="create-recipe">
        <div className="d-flex justify-content-center p-4 m-0">
          <h4 className="font-italic">Add a Recipe</h4>
        </div>
        <div
          style={{
            background: '#FF3E58',
            height: '0.69px',
            margin: '0 0 1rem'
          }}
        />
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="title">
              Recipe Title
            </label>
          </div>
          <input
            type="text"
            name="title"
            id="title"
            placeholder="Example: Classic Cheeseburger"
            value={this.state.title}
            onChange={this.handleTitleChange}
            required/>
          <div>
            <label htmlFor="description">
              Description
            </label>
          </div>
          <input
            type="text"
            name="description"
            id="description"
            placeholder="recipe description here"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            required />
          <div>
            <label htmlFor="ingredients">
              Ingredients
            </label>
          </div>
          <input
            type="text"
            name="ingredients"
            id="ingredients"
            placeholder="recipe ingredients here"
            value={this.state.ingredients}
            onChange={this.handleIngredientsChange}
            required />
          <label htmlFor="amount">
            amount
          </label>
          <input
            type="text"
            name="amount"
            id="amount"
            value={this.state.amount}
            onChange={this.handleAmountChange}
            required />
          <div>
            <label htmlFor="directions">
              Directions
            </label>
          </div>
          <input
            type="text"
            name="directions"
            id="directions"
            placeholder="recipe directions here"
            value={this.state.directions}
            onChange={this.handleDirectionsChange}
            required />
          <div>
            <label htmlFor="image">
              Image
            </label>
          </div>
          <input
            type="text"
            name="image"
            id="image"
            placeholder="Choose file"
            value={this.state.image}
            onChange={this.handleImageChange}
            required />
          <div>
            <label htmlFor="prepTime">
              Prep Time
            </label>
          </div>
          <input
            type="text"
            name="prepTime"
            id="prepTime"
            placeholder="ex: 20min"
            value={this.state.prepTime}
            onChange={this.handlePrepTimeChange}
            required />
          <label htmlFor="cookTime">
            Cook Time
          </label>
          <input
            type="text"
            name="cookTime"
            id="cookTime"
            placeholder="ex: 15min"
            value={this.state.cookTime}
            onChange={this.handleCookTimeChange}
            required />
          <div>
            <label htmlFor="course">
              Course
            </label>
          </div>
          <label htmlFor="beverage">
            <input
            type="checkbox"
            name="course-option"
            id="beverage"
            defaultChecked={this.state.beverage}
            onChange={this.handleBeverageChange}
            />
            Beverage
          </label>
          <label htmlFor="breakfastBrunch">
            <input
            type="checkbox"
            name="course-option"
            id="breakfastBrunch"
            value={this.state.breakfastBrunch}
            onChange={this.handleBreakfastBrunchChange}
            />
            Breakfast/Brunch
          </label>
          <label htmlFor="lunch">
            <input
            type="checkbox"
            name="course-option"
            id="lunch"
            value={this.state.lunch}
            onChange={this.handleLunchChange}
            />
            Lunch
          </label>
          <label htmlFor="snack">
            <input
            type="checkbox"
            name="course-option"
            id="snack"
            value={this.state.snack}
            onChange={this.handleSnackChange}
            />
            Snack
          </label>
          <label htmlFor="dinner">
            <input
            type="checkbox"
            name="course-option"
            id="dinner"
            value={this.state.dinner}
            onChange={this.handleDinnerChange}
            />
            Dinner
          </label>
          <div>
            <label htmlFor="cuisine">
              Cuisine
            </label>
          </div>
          <label htmlFor="western">
            <input
              type="radio"
              name="cuisine-option"
              id="western"
              value='western'
              checked={this.state.cuisine === 'western'}
              onChange={this.handleCuisineChange}
              required
              />
            Western
          </label>
          <label htmlFor="eastern">
            <input
              type="radio"
              name="cuisine-option"
              id="eastern"
              value='eastern'
              checked={this.state.cuisine === 'eastern'}
              onChange={this.handleCuisineChange}
              required
              />
            Eastern
          </label>
          <label htmlFor="other">
            <input
              type="radio"
              name="cuisine-option"
              id="other"
              value='other'
              checked={this.state.cuisine === 'other'}
              onChange={this.handleCuisineChange}
              required
            />
            Eastern
          </label>
          <div>
            <label htmlFor="skillLevel">
              Skill Level
            </label>
          </div>
          <label htmlFor="easy">
            <select value={this.state.skillLevel} onChange={this.handleSkillLevelChange}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
          </label>
          <div>
            <label htmlFor="tags">
              Tags
            </label>
          </div>
          <input
            type="text"
            name="tags"
            id="tags"
            placeholder="Example: Hamburger, Western"
            value={this.state.tags}
            onChange={this.handleTagsChange}
            required />
          <p>Separate tags with commas. For example: healthy, paleo, gluten-free, chicken</p>
          <button
          type="submit">
            delicious!
          </button>
        </form>
      </div>
    );
  }
}
