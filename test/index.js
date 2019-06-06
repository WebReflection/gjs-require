print(__filename);
const random = require('./ran/dom');
print('random: ' + random);
print(
  random ===
  require('./ran/dom')
);

print('Recursion test');
const {rand_sin} = require('./recursive/sin');
print('Imported recursive.rand_sin:' + rand_sin);
print('recursive.rand_sin() result: ' + rand_sin());
