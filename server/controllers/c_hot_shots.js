var StatsD = require('hot-shots');
var dogstatsd = new StatsD();
module.exports = {
    get: () => {
        return dogstatsd;
    },
}
