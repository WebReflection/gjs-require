print(__filename);
const random = require('./ran/dom');
print('random: ' + random);
print(
  random ===
  require('./ran/dom')
);
