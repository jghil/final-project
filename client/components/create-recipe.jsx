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
      breakfast: false,
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
    this.handleBreakfastChange = this.handleBreakfastChange.bind(this);
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

  handleBreakfastChange() {
    this.setState({
      breakfast: !this.state.breakfast
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
        <div className="d-flex justify-content-center p-4 mb-0">
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
          <div className="form-floating mb-3">
            <input
            type="text"
            name="title"
            id="title"
            placeholder="Example: Classic Cheeseburger"
            value={this.state.title}
            onChange={this.handleTitleChange}
            className="form-control form-control mb-2"
            required/>
            <label htmlFor="floatingInput">Title</label>
          </div>
          <div className="form-floating mb-3">
            <textarea
            type="text"
            name="description"
            id="description"
            placeholder="The most delicious cheeseburger.."
            className="mb-2 form-control form-control"
            value={this.state.description}
            onChange={this.handleDescriptionChange}
            required />
            <label htmlFor="floatingInput">Description</label>
          </div>
          <div className="row">
            <div className="col-7">
              <div className="form-floating mb-3">
                <input
            type="text"
            name="ingredients"
            id="ingredients"
            placeholder="Recipe Ingredients"
            value={this.state.ingredients}
            onChange={this.handleIngredientsChange}
            className="mb-2 form-control form-control-sm"
            required />
                <label htmlFor="floatingInput">Ingredients</label>
              </div>
            </div>
            <div className="col-5">
              <div className="form-floating mb-3">
                <input
                type="text"
                name="amount"
                id="amount"
                placeholder="Amount"
                value={this.state.amount}
                onChange={this.handleAmountChange}
                className="mb-2 form-control form-control-sm"
                required />
                <label htmlFor="floatingInput">Amount</label>
              </div>
            </div>
            <div className="d-flex">
              <button type="button" id="add-ingredient" className="d-block w-100 btn btn-outline-primary mb-3">add ingredient</button>
            </div>
          </div>
          <div className="form-floating mb-3">
            <textarea
            type="text"
            rows="3"
            name="directions"
            id="directions"
            placeholder="Directions"
            value={this.state.directions}
            onChange={this.handleDirectionsChange}
            className="mb-2 form-control form-control-sm"
            required />
            <label htmlFor="floatingInput">Directions</label>
          </div>
          <label htmlFor="image">
            Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            placeholder="Browse"
            value={this.state.image}
            onChange={this.handleImageChange}
            className="mb-3 form-control form-control-sm"
            required />
          <div className="row">
            <div className="col-6">
              <div className="form-floating mb-3">
                <input
            type="text"
            name="prepTime"
            id="prepTime"
            placeholder="Prep Time"
            value={this.state.prepTime}
            onChange={this.handlePrepTimeChange}
            className="mb-2 form-control form-control-sm"
            required />
                <label htmlFor="floatingInput">Prep Time</label>
              </div>
            </div>
            <div className="col-6">
              <div className="form-floating mb-3">
                <input
            type="text"
            name="cookTime"
            id="cookTime"
            placeholder="Cook Time"
            value={this.state.cookTime}
            onChange={this.handleCookTimeChange}
            className="mb-3 form-control form-control-sm"
            required />
                <label htmlFor="floatingInput">Cook Time</label>
              </div>
            </div>
          </div>
          <div>
            <label htmlFor="course">
              Course
            </label>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="beverage" className="word">
                <input
            type="checkbox"
            name="course-option"
            id="beverage"
            defaultChecked={this.state.beverage}
            onChange={this.handleBeverageChange}
            className="form-check-input mb-2 me-2 align-middle"
            />
                Beverage
              </label>
            </div>
            <div className="col-6">
              <label htmlFor="breakfast" className="word">
                <input
            type="checkbox"
            name="course-option"
            id="breakfast"
            value={this.state.breakfastBrunch}
            onChange={this.handleBreakfastBrunchChange}
            className="form-check-input mb-2 me-2 align-middle"
            />
                Breakfast
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="lunch" className="word">
                <input
            type="checkbox"
            name="course-option"
            id="lunch"
            value={this.state.lunch}
            onChange={this.handleLunchChange}
            className="form-check-input mb-2 me-2 align-middle"
            />
                Lunch
              </label>
            </div>
            <div className="col-6">
              <label htmlFor="snack" className="word">
                <input
            type="checkbox"
            name="course-option"
            id="snack"
            value={this.state.snack}
            onChange={this.handleSnackChange}
            className="form-check-input mb-2 me-2 align-middle"
            />
                Snack
              </label>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <label htmlFor="dinner" className="word">
                <input
            type="checkbox"
            name="course-option"
            id="dinner"
            value={this.state.dinner}
            onChange={this.handleDinnerChange}
            className="form-check-input mb-2 me-2 align-middle"
            />
                Dinner
              </label>
            </div>
          </div>
          <div>
            <label htmlFor="cuisine">
              Cuisine
            </label>
          </div>
          <div className="row">
            <div className="col-4">
              <label htmlFor="western" className="word">
                <input
              type="radio"
              name="cuisine-option"
              id="western"
              value='western'
              checked={this.state.cuisine === 'western'}
              onChange={this.handleCuisineChange}
              required
              className="form-check-input me-2 mb-2"
              />
                Western
              </label>
            </div>
            <div className="col-4">
              <label htmlFor="eastern" className="word">
                <input
              type="radio"
              name="cuisine-option"
              id="eastern"
              value='eastern'
              checked={this.state.cuisine === 'eastern'}
              onChange={this.handleCuisineChange}
              required
              className="form-check-input me-2 mb-2"
              />
                Eastern
              </label>
            </div>
            <div className="col-4">
              <label htmlFor="other" className="word">
                <input
              type="radio"
              name="cuisine-option"
              id="other"
              value='other'
              checked={this.state.cuisine === 'other'}
              onChange={this.handleCuisineChange}
              required
              className="form-check-input me-2 mb-2"
            />
                Other
              </label>
            </div>
          </div>
          <div className="row col-6">
            <label htmlFor="skillLevel">
              Skill Level
            </label>
            <label htmlFor="skillLevel">
              <select value={this.state.skillLevel} onChange={this.handleSkillLevelChange} className="form-select form-select-sm mb-2">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </label>
          </div>
          <div className="form-floating mb-1">
            <input
            type="text"
            name="tags"
            id="tags"
            placeholder="Example: Hamburger, Western"
            value={this.state.tags}
            onChange={this.handleTagsChange}
            className="form-control form-control-sm"
            required />
            <label htmlFor="floatingInput">Tags</label>
          </div>
          <p className="tags-text mx-1">Separate tags with commas. For example: healthy, paleo, gluten-free, chicken</p>
          <div className="d-flex justify-content-center">
            <button
          type="submit" className="btn btn-primary btn-sm" id="create-recipe-button">
              delicious!
            </button>
          </div>
        </form>
      </div>
    );
  }
}
