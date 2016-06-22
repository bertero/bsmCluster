const redis          = require('redis')
const auth           = process.env.SUMMARIES_REDIS_AUTH
const summariesRedis = redis.createClient('15668', 'pub-redis-15668.us-east-1-4.3.ec2.garantiadata.com', auth)

module.exports = {
	summariesRedis : summariesRedis,
	summarize      : summarize
}

function summarize (data) {
	
}