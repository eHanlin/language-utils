
function highlight(text, original, decorate) {
  var result = [];
  var isCut = new RegExp(text);

  if (original === text) return decorate(text);
  if (isCut.test(original)) return decorate(text);

  text
  .split('')
  .forEach(function(val, index){
    var targetValue = original[index];
    if (targetValue && val !== targetValue) result.push(decorate(val)); else result.push(val);
  });


  return result.join('');
}

module.exports = {
  highlight:highlight
};

