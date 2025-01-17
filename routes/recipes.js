const express = require('express');
const router = express.Router();
const db = require('../db');

/* GET recipes listing. */
router.get('/', (req, res, next) => {
  db.all('SELECT * FROM recipe', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.sendStatus(500);
      return;
    }
    req.recipes = rows;

    db.all('SELECT * FROM ingredient', (err, rows) => {
      if (err) {
        console.error(err.message);
        res.sendStatus(500);
        req.recipes = undefined;
        return;
      }
      req.ingredients = rows;

      db.all('SELECT * FROM instruction', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.sendStatus(500);
            req.recipes = undefined;
            req.ingredients = undefined;
            return;
        }
        req.instructions = rows;

        let body = {};
        req.recipes.forEach(recipe => body[recipe.name] = { ingredients: [], instructions: {} });
        req.ingredients.forEach(ingredient => body[ingredient.recipe_name].ingredients.push(ingredient.ingredient_description));
        req.instructions.forEach(instruction => body[instruction.recipe_name].instructions[instruction.instruction_number] = instruction.instruction_description);
        
        // res.header("Content-Type", 'application/json');
        // res.send(JSON.stringify(body, null, 2));
        res.render('recipes', { title: 'Recipes', recipes: body });
      });
    });
  });
});

module.exports = router;
