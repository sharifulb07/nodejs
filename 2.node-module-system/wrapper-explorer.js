console.log("Node Module wrapper demo");

console.log("__filename", __filename);
console.log("__direname", __dirname);

module.exports.greet = function (name) {
  console.log(`Hello ${name}`);
};
