const router = require('express').Router()
// route for add new place
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get("/", (req, res) => {
  let places = [{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: "/images/edgar-castrejon-1SPu0KT-Ejg-unsplash.jpg"
  }, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: "/images/tomas-jasovsky-d5SZqLkpIrY-unsplash.jpg"
  }]
  
  res.render("places/index",{places})
});



module.exports = router
