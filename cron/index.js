const removeOldTokens = require('./removeOldToken');

const cronRunner = () => {
    removeOldTokens.start();
};

module.exports = {
    cronRunner
};
