require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
const ClientError = require('./client-error');
const pg = require('pg');

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});
const jsonMiddleware = express.json();
const app = express();
app.use(jsonMiddleware);
app.use(staticMiddleware);

app.post('/api/recipes', (req, res) => {
  const { userId, title, description, directions, image, prepTime, cookTime, cuisine, beverage, breakfast, dinner, snack, lunch, skillLevel, tags, ingredient, amount } = req.body;
  if (!title || !description || !directions || !prepTime || !cookTime || !cuisine || !beverage || !breakfast || !dinner || !snack || !lunch || !skillLevel || !tags || !ingredient || !amount) {
    throw new ClientError(400, 'title, description, directions, prepTime, cookTime, cuisine, beverage, breakfast, dinner, snack, lunch, skillLevel, tags, ingredient, amount are required fields');
  }
  const sql = `
  insert into "recipes" ("userId", "title", "description", "directions", "image", "prepTime", "cookTime", "cuisine", "beverage", "breakfast", "dinner", "snack", "lunch", "skillLevel", "tags")
  values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)
  returning *
  `;
  const sql2 = `
  insert into "ingredients" ("ingredient", "amount", "recipeId")
  select "recipeId" from "recipes"
  values ($1, $2, $3)
  returning *
  `;
  const params = [userId, title, description, directions, image, prepTime, cookTime, cuisine, beverage, breakfast, dinner, snack, lunch, skillLevel, tags];
  const params2 = [ingredient, amount];
  db.query(sql, params)
    .then(result => {
      let [recipe] = result.rows;
      db.query(sql2, params2)
        .then(result => {
          recipe = {
            ingredients: [{
              ingredient, amount
            }]
          };
          res.status(201).json(recipe);
        });
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'an unexpected error occurred'
      });
    });
});
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  process.stdout.write(`\n\napp listening on port ${process.env.PORT}\n\n`);
});
