const db = require('../../db');

test('there are recipes', async () => {
  let data = [
    { id: 1, name: 'Soft Boiled Eggs' },
    { id: 2, name: 'Air Fryer Chicken Wings' }
  ]

  db.all('SELECT * FROM recipe', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500);
      res.send("500 Internal Server Error")
      return;
    }
    expect(rows).toEqual(data);
  });
});

test('there are ingredients for each recipe', async () => {
  let data = [
    {
      id: 1,
      recipe_name: 'Soft Boiled Eggs',
      ingredient_description: 'large egg(s), chilled'
    },
    {
      id: 2,
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1 lb chicken wings'
    },
    {
      id: 3,
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1 tsp coarse salt'
    },
    {
      id: 4,
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1 tsp baking powder'
    },
    {
      id: 5,
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1 tsp cornstarch'
    },
    {
      id: 6,
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1/2 tsp garlic powder'
    },
    {
      id: 7,
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1/2 tsp smoked paprika'
    },
    {
      id: 8,
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1/4 tsp onion powder'
    },
    {
      id: 9,
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1/8 tsp black pepper'
    },
    {
      id: 10,
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1/8 tsp cooking oil for greasing'
    }  
  ];

  db.all('SELECT * FROM ingredient', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500);
      res.send("500 Internal Server Error")
      return;
    }
    expect(rows).toEqual(data);
  });
});

test('there are instructions for each recipe', async () => {
  let data = [
    {
      id: 1,
      recipe_name: 'Soft Boiled Eggs',
      instruction_number: 1,
      instruction_description: 'Add 1 inch of water to a sauce pot, cover, and bring to a boil over high heat.'
    },
    {
      id: 2,
      recipe_name: 'Soft Boiled Eggs',
      instruction_number: 2,
      instruction_description: "Once boiling, add an egg (or however many you'd like as long as they are in a single layer in a bottom of the pot), straight from the refridgerator into the pot. Replace the lid and let it continue to boil for exactly six minutes."
    },
    {
      id: 3,
      recipe_name: 'Soft Boiled Eggs',
      instruction_number: 3,
      instruction_description: 'After six minutes, remove the egg(s) from the pot and place them in an ice water bath or run under cool water until they are cool enough to handle. Peel, and enjoy!'
    },
    {
      id: 4,
      recipe_name: 'Air Fryer Chicken Wings',
      instruction_number: 1,
      instruction_description: 'Pat the chicken wings dry with a paper towel. Make sure to get as much moisture off the skin as possible.'
    },
    {
      id: 5,
      recipe_name: 'Air Fryer Chicken Wings',
      instruction_number: 2,
      instruction_description: 'Mix 1 teaspoon of salt with 1 teaspoon of baking powder per pound of chicken. Toss the dried chicken wings in this mixture until evenly coated. Place the wings on a rack set over a sheet pan and refridgerate for at least one hour.'
    },
    {
      id: 6,
      recipe_name: 'Air Fryer Chicken Wings',
      instruction_number: 3,
      instruction_description: 'Remove the wings from the fridge and pat them dry a second time. Mix the cornstarch, garlic powder, smoked paprika, onion powder, and black pepper called for in the recipe for every pound of chicken. Toss the wings in this mixture until thoroughly coated.'
    },
    {
      id: 7,
      recipe_name: 'Air Fryer Chicken Wings',
      instruction_number: 4,
      instruction_description: 'Grease the air fryer basket and preheat it to 300°F. Arrange the wings in a single layer, making sure they do not touch. Cook for 15 minutes.'
    },
    {
      id: 8,
      recipe_name: 'Air Fryer Chicken Wings',
      instruction_number: 5,
      instruction_description: 'Flip the wings over, raise the temperature of the air fryer to 450°F, and cook for 10 minutes. Use a meat thermometer to make sure the wings have an internal temperature of 165°F before serving.'
    }  
  ];

  db.all('SELECT * FROM instruction', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500);
      res.send("500 Internal Server Error")
      return;
    }
    expect(rows).toEqual(data);
  });
});

test('the recipe data is formatted correctly to be sent in the response body', () => {
  let data = {
    'Soft Boiled Eggs': {
      ingredients: [ 'large egg(s), chilled' ],
      instructions: {
        '1': 'Add 1 inch of water to a sauce pot, cover, and bring to a boil over high heat.',
        '2': "Once boiling, add an egg (or however many you'd like as long as they are in a single layer in a bottom of the pot), straight from the refridgerator into the pot. Replace the lid and let it continue to boil for exactly six minutes.",
        '3': 'After six minutes, remove the egg(s) from the pot and place them in an ice water bath or run under cool water until they are cool enough to handle. Peel, and enjoy!'
      }
    },
    'Air Fryer Chicken Wings': {
      ingredients: [
        '1 lb chicken wings',
        '1 tsp coarse salt',
        '1 tsp baking powder',
        '1 tsp cornstarch',
        '1/2 tsp garlic powder',
        '1/2 tsp smoked paprika',
        '1/4 tsp onion powder',
        '1/8 tsp black pepper',
        '1/8 tsp cooking oil for greasing'
      ],
      instructions: {
        '1': 'Pat the chicken wings dry with a paper towel. Make sure to get as much moisture off the skin as possible.',
        '2': 'Mix 1 teaspoon of salt with 1 teaspoon of baking powder per pound of chicken. Toss the dried chicken wings in this mixture until evenly coated. Place the wings on a rack set over a sheet pan and refridgerate for at least one hour.',
        '3': 'Remove the wings from the fridge and pat them dry a second time. Mix the cornstarch, garlic powder, smoked paprika, onion powder, and black pepper called for in the recipe for every pound of chicken. Toss the wings in this mixture until thoroughly coated.',
        '4': 'Grease the air fryer basket and preheat it to 300°F. Arrange the wings in a single layer, making sure they do not touch. Cook for 15 minutes.',
        '5': 'Flip the wings over, raise the temperature of the air fryer to 450°F, and cook for 10 minutes. Use a meat thermometer to make sure the wings have an internal temperature of 165°F before serving.'
      }
    }
  }  

  db.all('SELECT * FROM recipe', (err, rows) => {
    if (err) {
      console.error(err.message);
      res.status(500);
      res.send("500 Internal Server Error")
      return;
    }
    req.recipes = rows;

    db.all('SELECT * FROM ingredient', (err, rows) => {
      if (err) {
        console.error(err.message);
        res.status(500);
        res.send("500 Internal Server Error")
        return;
      }
      console.log(rows);
      req.ingredients = rows;

      db.all('SELECT * FROM instruction', (err, rows) => {
        if (err) {
            console.error(err.message);
            res.status(500);
            res.send("500 Internal Server Error")
            return;
        }
        req.instructions = rows;

        let body = {};
        req.recipes.forEach(recipe => body[recipe.name] = { ingredients: [], instructions: {} });
        req.ingredients.forEach(ingredient => body[ingredient.recipe_name].ingredients.push(ingredient.ingredient_description));
        req.instructions.forEach(instruction => body[instruction.recipe_name].instructions[instruction.instruction_number] = instruction.instruction_description);
        
        expect(body).toEqual(data);
      });
    });
  });
});
