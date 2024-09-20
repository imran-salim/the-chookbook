const db = require('../../db');

test('there are recipes', async () => {
  let data = [
    { name: 'Soft Boiled Eggs' },
    { name: 'Air Fryer Chicken Wings' }
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
      recipe_name: 'Soft Boiled Eggs',
      ingredient_description: 'large egg(s), chilled'
    },
    {
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1 lb chicken wings'
    },
    {
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1 tsp coarse salt'
    },
    {
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1 tsp baking powder'
    },
    {
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1 tsp cornstarch'
    },
    {
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1/2 tsp garlic powder'
    },
    {
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1/2 tsp smoked paprika'
    },
    {
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1/4 tsp onion powder'
    },
    {
      recipe_name: 'Air Fryer Chicken Wings',
      ingredient_description: '1/8 tsp black pepper'
    },
    {
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
      recipe_name: 'Soft Boiled Eggs',
      instruction_number: 1,
      instruction_description: 'Add 1 inch of water to a sauce pot, cover, and bring to a boil over high heat.'
    },
    {
      recipe_name: 'Soft Boiled Eggs',
      instruction_number: 2,
      instruction_description: "Once boiling, add an egg (or however many you'd like as long as they are in a single layer in a bottom of the pot), straight from the refridgerator into the pot. Replace the lid and let it continue to boil for exactly six minutes."
    },
    {
      recipe_name: 'Soft Boiled Eggs',
      instruction_number: 3,
      instruction_description: 'After six minutes, remove the egg(s) from the pot and place them in an ice water bath or run under cool water until they are cool enough to handle. Peel, and enjoy!'
    },
    {
      recipe_name: 'Air Fryer Chicken Wings',
      instruction_number: 1,
      instruction_description: 'Pat the chicken wings dry with a paper towel. Make sure to get as much moisture off the skin as possible.'
    },
    {
      recipe_name: 'Air Fryer Chicken Wings',
      instruction_number: 2,
      instruction_description: 'Mix 1 teaspoon of salt with 1 teaspoon of baking powder per pound of chicken. Toss the dried chicken wings in this mixture until evenly coated. Place the wings on a rack set over a sheet pan and refridgerate for at least one hour.'
    },
    {
      recipe_name: 'Air Fryer Chicken Wings',
      instruction_number: 3,
      instruction_description: 'Remove the wings from the fridge and pat them dry a second time. Mix the cornstarch, garlic powder, smoked paprika, onion powder, and black pepper called for in the recipe for every pound of chicken. Toss the wings in this mixture until thoroughly coated.'
    },
    {
      recipe_name: 'Air Fryer Chicken Wings',
      instruction_number: 4,
      instruction_description: 'Grease the air fryer basket and preheat it to 300°F. Arrange the wings in a single layer, making sure they do not touch. Cook for 15 minutes.'
    },
    {
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
