var webCrawlerFunctions = require('../functions/webCrawler')
var serverFunctions     = require('../functions/express.js')
var commonFunctions     = require('../functions/common.js')
var log                 = commonFunctions.log
var summarizeRedis      = require('../functions/redis.js').summarize

var routesForLanding = ['/', '/login']

routesForLanding.forEach(function(route){
	serverFunctions.app.get(route, function(req, res){
		res.render('../views/login.ejs')
	})
})

serverFunctions.app.post('/login', commonFunctions.loginAction)

serverFunctions.app.get('/home', function(req, res){
    webCrawlerFunctions.webCrawler(null, false, false, function(message){
    	var stocksResults = message.split('----------------------------------')
    	log(message)
      res.render('../views/home.ejs', {stocksResults : stocksResults})
      res.render(message)
    })
})

serverFunctions.app.get('/uptimeCheck', function(req, res){
	log('Uptime Check!')
	res.send('Yabadabadoo!')
})

['specialOffer'].forEach(function(route){

  serverFunctions.app.get('/' + route, function(req, res){

  })

})