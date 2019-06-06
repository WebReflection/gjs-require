print(__filename);
const random = require('./random');
print('Imported random: ' + random);
exports.rand_sin = () => { return Math.sin(random); };
