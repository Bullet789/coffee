const Coffee = require('../model/Coffee.model');

module.exports.coffeeCont  = {
    getDrinks : async (req, res) => {
        try {
            const data = await Coffee.find({})
            res.json(data)
        }
        catch (err) {
            res.json(err)
        }
        
    },
    getDrinksByStock : async (req, res) => {
        try{
            const data = await Coffee.find({ drinkavailable: true })
            res.json(data)
        }
        catch (err) {
            res.json(err)
        }
    },
    getDrinksById : async (req, res) => {
        try{
            const data = await Coffee.findById(req.params.id)
            res.json(data)
        }
        catch (err) {
            res.json(err)
        }
    },
    postDrinks : async (req, res) => {
        const {name,price,drinkavailable,drinkcofein,volume,descriptiondrink} = req.body
        try {
            const data = await Coffee.create({
                name,
                price,
                drinkavailable,
                drinkcofein,
                volume,
                descriptiondrink
            })
            res.json(data)
        }
        catch (err) {
            res.json('Ошибка при добавлении нового напитка')
        }
    },
    deleteDrinksById : async (req, res) => {
        try {
            const data = await Coffee.findByIdAndDelete(req.params.id)
            res.json(data)
        }
        catch (err) {
            res.json(err)
        }
    },
    patchDrinksById : async (req, res) => {
        try {
            const data = await Coffee.findByIdAndUpdate(req.params.id,
                {volume: req.body.volume})
            res.json('изменён')
        }
        catch (err) {
            res.json(err)
        }
    }
}