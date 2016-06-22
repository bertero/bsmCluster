var cronFunctions       = require('./functions/job.js')
var serverFunctions     = require('./functions/express.js')
var commonFunctions     = require('./functions/common.js')
var requireDir          = require('require-dir')
var log                 = commonFunctions.log
var request             = require('request')
var async               = require('async')

process.on('uncaught exception', function(err){
    log(err)
    // process.exit(1);
})

serverFunctions.startServer(function(){

	requireDir('functions')
	requireDir('routes')
	requireDir('views')
	cronFunctions.initializeCronJobs()

	log('Bert Jobs initialized!')

 //  var cbTimer = Number(Math.round(Math.random()*5000))
 //  setInterval(function(){
 //  	cbTimer = Number(Math.round(Math.random()*20000))
 //  }, 500)

	// setInterval(function(){
	// 	var url = 'http://bit.ly/28JgS7t'
	//   request.get(url, null, function(err, body, res){
	//   	log(cbTimer/1000)
	//   	var status = body ? body.statusCode : undefined
	//     log('err: ' + err);log('status: ' + status)
	//   })
	// }, cbTimer)


	// var arr = []
	// for(var i = 0; i<9999999; i++) arr.push(i)
	// async.eachSeries(arr, function(iteree, cb){
	//   var url = 'http://bit.ly/28JgS7t'
	//   request.get(url, null, function(err, body, res){
	//     log('err: ' + err);log('status: ' + body.statusCode);
	//     var cbTimer = Number(Math.round(Math.random()*20000))
	//     log(cbTimer/1000)
	//     setTimeout(cb, cbTimer)
	//   })
	// }, function(){ log('done') })

})