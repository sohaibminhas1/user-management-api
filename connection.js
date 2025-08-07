const mongoose = require ("mongoose");

async function connectMongoDB(url)
{
    return mongoose.connect(url)
    .then(() => console.log('MONGO DB IS CONNECTED'))
    .catch((err) => console.log('ERROR WHILE CONNECTING', err))
}

module.exports = {connectMongoDB};