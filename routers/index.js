const express = require('express');
const UserController = require('../controllers/users');
const ShopController = require('../controllers/shops');
const DigimonController = require('../controllers/digimons');
// const authentication = require('../middlewares/authentication');
const router = express.Router();
const app = express()

router.get('/', UserController.tes)
  
//login-regis
router.post('/register', UserController.register)
router.post('/login', UserController.login)

//middleware
// router.use(authentication)

//user profile
router.get('/profile/:id', UserController.profileById)

//digimon inventory
router.get('/digimons', DigimonController.getDigimon)
router.get('/digimons/:id', DigimonController.getDigimonById)
router.delete('/digimons/:id', DigimonController.deleteDigimonById)

//shops
router.get('/shops', ShopController.getShop)
router.patch('/shops', ShopController.gatchaProcess) //<< proses inject data bisa dilakukan disini semua



module.exports = router