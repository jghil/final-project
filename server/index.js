require('dotenv/config');
const express = require('express');
const staticMiddleware = require('./static-middleware');
const errorMiddleware = require('./error-middleware');
// const ClientError = require('./client-error');
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
  let { userId, title, description, directions, image, prepTime, cookTime, skillLevel, allIngredients } = req.body;
  userId = 1;

  if (!userId || !title || !description || !directions || !image || !prepTime || !cookTime || !skillLevel || !allIngredients) {
    res.status(400).json({
      error: 'please fill in all required fields'
    });
    return;
  }

  const sql = `
  insert into "recipes" ("userId", "title", "description", "directions", "image", "prepTime", "cookTime", "skillLevel")
  values ($1, $2, $3, $4, $5, $6, $7, $8)
  returning *
  `;
  const sql2 = `
  insert into "ingredients" ("allIngredients", "recipeId")
  values ($1, $2)
  returning *
  `;
  const params = [userId, title, description, directions, image, prepTime, cookTime, skillLevel];
  db.query(sql, params)
    .then(result => {
      let [recipe] = result.rows;
      const params2 = [allIngredients, recipe.recipeId];
      db.query(sql2, params2)
        .then(result => {
          recipe = {
            ingredients:
              allIngredients
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
