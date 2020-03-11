const { componentGenerator } = require('./plop/helpers/component');
const { containerGenerator } = require('./plop/helpers/container');

module.exports = function(plop) {
  // controller generator
  componentGenerator(plop);
  containerGenerator(plop);
};
