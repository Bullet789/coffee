const {Router} = require('express');
const {coffeeCont} = require('../controller/controllers.coffee')
const route = Router();

route.get('/drinks',coffeeCont.getDrinks);
route.get('/drinks/in-stock',coffeeCont.getDrinksByStock);
route.get('/drinks/:id',coffeeCont.getDrinksById);
route.post('/drinks',coffeeCont.postDrinks);
route.delete('/drinks/:id',coffeeCont.deleteDrinksById);
route.patch('/drinks/:id',coffeeCont.patchDrinksById);


module.exports = route