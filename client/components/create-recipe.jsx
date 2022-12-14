import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashCan } from '@fortawesome/free-regular-svg-icons';

export default class CreateRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      description: '',
      allIngredients: [{ ingredients: '' }],
      directions: '',
      image: '',
      prepTime: '',
      cookTime: '',
      skillLevel: 1
    };

    this.handleTitleChange = this.handleTitleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleallIngredientsChange = this.handleallIngredientsChange.bind(this);
    this.handleDirectionsChange = this.handleDirectionsChange.bind(this);
    this.handleImageChange = this.handleImageChange.bind(this);
    this.handlePrepTimeChange = this.handlePrepTimeChange.bind(this);
    this.handleCookTimeChange = this.handleCookTimeChange.bind(this);
    this.handleSkillLevelChange = this.handleSkillLevelChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  createUI() {
    return this.state.allIngredients.map((el, i) =>
      <div key={i}>
        <div className="row">
          <div className="col-9">
            <div className="form-floating mb-3">
              <input
                type="text"
                name="ingredients"
                id="ingredients"
                placeholder="Recipe Ingredients"
                value={el.ingredients || ''}
                onChange={this.handleChange.bind(this, i)}
                className="mb-2 form-control form-control-sm"
                required />
              <label htmlFor="floatingInput">Ingredient and Amount</label>
            </div>
          </div>
          <div className="col-3 d-flex">
            <button type="button" onClick={this.removeClick.bind(this, i)} className="btn btn-outline-primary mb-3 w-100" id="trash">
              <FontAwesomeIcon icon={faTrashCan} />
            </button>
          </div>
        </div>
      </div>
    );
  }

  handleChange(i, event) {
    const allIngredients = [...this.state.allIngredients];
    allIngredients[i][event.target.id] = event.target.value;
    this.setState({ allIngredients });
  }

  addClick() {
    this.setState(prevState => ({
      allIngredients: [
        ...prevState.allIngredients,
        { ingredients: '' }
      ]
    }));
  }

  removeClick(event) {
    const allIngredients = [...this.state.allIngredients];
    allIngredients.splice(event, 1);
    this.setState({ allIngredients });
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

  handleallIngredientsChange(event) {
    this.setState({
      allIngredients:
        [{ ingredients: event.target.value }]
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

  handleSkillLevelChange(event) {
    this.setState({
      skillLevel: parseInt(event.target.value, 10)
    });
  }

  handleSubmit(event) {
    // console.log(this.state);
    event.preventDefault();
    const newRecipe = {
      title: this.state.title,
      description: this.state.description,
      allIngredients: this.state.allIngredients,
      directions: this.state.directions,
      image: this.state.image,
      prepTime: this.state.prepTime,
      cookTime: this.state.cookTime,
      skillLevel: this.state.skillLevel
    };
    this.props.onSubmit(newRecipe);
    this.setState({
      title: '',
      description: '',
      allIngredients: [{ ingredients: '' }],
      directions: '',
      image: '',
      prepTime: '',
      cookTime: '',
      skillLevel: 1
    });
    document.getElementById('form').reset();
  }

  render() {
    return (
      <div className="container shadow pb-4 rounded" id="create-recipe">
        <div className="d-flex justify-content-center p-4">
          <h4 className="font-italic">Add a Recipe</h4>
        </div>
        <div
          style={{
            background: '#FF3E58',
            height: '0.69px',
            margin: '0 0 1rem'
          }}
        />
        <form onSubmit={this.handleSubmit} id="form">
          <div className="form-floating mb-3">
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Example: Classic Cheeseburger"
              value={this.state.title}
              onChange={this.handleTitleChange}
              className="form-control form-control mb-2"
              required />
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
          {this.createUI()}
          <div className="d-flex">
            <button type="button" onClick={this.addClick.bind(this)} id="add-ingredient" className="d-block w-100 btn btn-outline-primary mb-3">add ingredient</button>
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
          <div className="row col-6">
            <label htmlFor="skillLevel">
              Skill Level
            </label>
            <label htmlFor="skillLevel">
              <select value={this.state.skillLevel} onChange={this.handleSkillLevelChange} className="form-select form-select-sm mb-3">
                <option value="1" >Easy</option>
                <option value="2">Medium</option>
                <option value="3">Hard</option>
              </select>
            </label>
          </div>
          <div className="d-flex justify-content-center">
            <button
              type="submit" className="btn btn-primary btn-med" id="create-recipe-button">
              delicious!
            </button>
          </div>
        </form>
      </div>
    );
  }
}
