const { createClient }  = require('redis');

const client = createClient({
    username: 'default',
    password: process.env.REDIS_PASS,
    socket: {
        host: 'redis-16773.c283.us-east-1-4.ec2.redns.redis-cloud.com',
        port: 16773
    }
});
module.exports = redisClient;